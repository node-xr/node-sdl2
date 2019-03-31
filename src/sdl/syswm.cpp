#include "syswm.hpp"
#include "../util.hpp"

#include <SDL_syswm.h>
#include <string>

//===========================================================================
void create_sdl_syswm(napi_env env, napi_value exports)
{
  export_function(env, exports, "GetWindowWMInfo", napi_SDL_GetWindowWMInfo);
}

//===========================================================================
napi_value napi_SDL_GetWindowWMInfo(napi_env env, napi_callback_info info)
{
  napi_value argv[1];
  GET_ARGS(1);

  SDL_Window *window;
  ASSERT_OK(napi_get_value_external(env, argv[0], (void **)&window), "EINVAL", "Argument type error.");

  SDL_SysWMinfo wminfo;
  SDL_VERSION(&wminfo.version);

  // Perform the actual SDL call to get window information.
  bool result = SDL_GetWindowWMInfo(window, &wminfo);
  if (result != SDL_TRUE)
  {
    napi_throw_error(env, "EINVAL", "Failed to retrieve window information.");
    return nullptr;
  }

  // Create a JS object to hold the window info.
  napi_value retval;
  ASSERT_OK(napi_create_object(env, &retval), "EINVAL", "Failed to create exports.");

  std::string version_str =
      std::to_string(wminfo.version.major) + '.' + std::to_string(wminfo.version.minor) + '.' + std::to_string(wminfo.version.patch);

  napi_value version;
  ASSERT_OK(napi_create_string_utf8(env, version_str.c_str(), version_str.size(), &version), "EINVAL", "Failed to allocate version.");
  ASSERT_OK(napi_set_named_property(env, retval, "version", version), "EINVAL", "Failed to assign version.");

  napi_value subsystem;
  ASSERT_OK(napi_create_uint32(env, wminfo.subsystem, &subsystem), "EINVAL", "Failed to deserialize subsystem.");
  ASSERT_OK(napi_set_named_property(env, retval, "subsystem", subsystem), "EINVAL", "Failed to assign subsystem.");

  // For each platform, deserialize the corresponding platform-specific values.
  switch (wminfo.subsystem)
  {
#if defined(SDL_VIDEO_DRIVER_WINDOWS)
  case SDL_SYSWM_WINDOWS:
  {
    napi_value window;
    ASSERT_OK(napi_create_external(env, wminfo.win.window, nullptr, nullptr, &window), "EINVAL", "Argument type error.");
    ASSERT_OK(napi_set_named_property(env, retval, "window", window), "EINVAL", "Property setting error.");

    napi_value hdc;
    ASSERT_OK(napi_create_external(env, wminfo.win.hdc, nullptr, nullptr, &hdc), "EINVAL", "Argument type error.");
    ASSERT_OK(napi_set_named_property(env, retval, "hdc", hdc), "EINVAL", "Property setting error.");

    napi_value hinstance;
    ASSERT_OK(napi_create_external(env, wminfo.win.hinstance, nullptr, nullptr, &hinstance), "EINVAL", "Argument type error.");
    ASSERT_OK(napi_set_named_property(env, retval, "hinstance", hinstance), "EINVAL", "Property setting error.");
    break;
  }
#endif

#if defined(SDL_VIDEO_DRIVER_X11)
  case SDL_SYSWM_X11:
  {
    napi_value display;
    ASSERT_OK(napi_create_external(env, wminfo.info.x11.display, nullptr, nullptr, &display), "EINVAL", "Argument type error.");
    ASSERT_OK(napi_set_named_property(env, retval, "display", display), "EINVAL", "Property setting error.");

    napi_value window;
    ASSERT_OK(napi_create_external(env, (void *)wminfo.info.x11.window, nullptr, nullptr, &window), "EINVAL", "Argument type error.");
    ASSERT_OK(napi_set_named_property(env, retval, "window", window), "EINVAL", "Property setting error.");
    break;
  }
#endif

#if defined(SDL_VIDEO_DRIVER_COCOA)
  case SDL_SYSWM_COCOA:
  {
    napi_value window;
    ASSERT_OK(napi_create_external(env, wminfo.cocoa.window, nullptr, nullptr, &window), "EINVAL", "Argument type error.");
    ASSERT_OK(napi_set_named_property(env, retval, 'window', window), "EINVAL", "Property setting error.");
    break;
  }
#endif

  default:
    std::string message = "Failed window info for unknown type: " + std::to_string(wminfo.subsystem);
    napi_throw_error(env, "EINVAL", message.c_str());
    return nullptr;
  }

  // Return the populated window info object.
  return retval;
}
