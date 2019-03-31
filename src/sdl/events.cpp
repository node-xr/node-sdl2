#include "events.hpp"
#include "../util.hpp"

#include <SDL_events.h>

napi_value convert_SDL_event(napi_env env, const SDL_Event &event)
{
  napi_value retval;
  ASSERT_OK(napi_create_object(env, &retval), "EINVAL", "Failed to create SDL_event.");

  // Fields shared by every event.
  SET_PROPERTY(retval, uint32, "type", event.type);
  SET_PROPERTY(retval, uint32, "timestamp", event.common.timestamp);

  switch (event.type)
  {
  case SDL_DISPLAYEVENT:
  {
    SET_PROPERTY(retval, uint32, "display", event.display.display);
    SET_PROPERTY(retval, uint32, "event", event.display.event);
    SET_PROPERTY(retval, int32, "data1", event.display.data1);
    break;
  }
  case SDL_WINDOWEVENT:
  {
    SET_PROPERTY(retval, uint32, "windowID", event.window.windowID);
    SET_PROPERTY(retval, uint32, "event", event.window.event);
    SET_PROPERTY(retval, int32, "data1", event.window.data1);
    SET_PROPERTY(retval, int32, "data2", event.window.data2);
    break;
  }
  case SDL_KEYDOWN:
  case SDL_KEYUP: // TODO: mark intentional
  {
    SET_PROPERTY(retval, uint32, "windowID", event.key.windowID);
    SET_PROPERTY(retval, uint32, "state", event.key.state);
    SET_PROPERTY(retval, uint32, "repeat", event.key.repeat);

    napi_value keysym;
    ASSERT_OK(napi_create_object(env, &keysym), "EINVAL", "Failed to create SDL_event.");
    {
      SET_PROPERTY(keysym, uint32, "scancode", event.key.keysym.scancode);
      SET_PROPERTY(keysym, int32, "sym", event.key.keysym.sym);
      SET_PROPERTY(keysym, uint32, "mod", event.key.keysym.mod);
    }
    ASSERT_OK(napi_set_named_property(env, retval, "keysym", keysym), "EINVAL", "Property setting error.");
    break;
  }
  case SDL_TEXTEDITING:
  {
    break;
  }
  case SDL_TEXTINPUT:
  {
    break;
  }
  case SDL_MOUSEMOTION:
  {
    break;
  }
  case SDL_MOUSEBUTTONDOWN:
  case SDL_MOUSEBUTTONUP:
  {
    break;
  }
  case SDL_MOUSEWHEEL:
  {
    break;
  }
  case SDL_JOYAXISMOTION:
  {
    break;
  }
  case SDL_JOYHATMOTION:
  {
    break;
  }
  case SDL_JOYBUTTONDOWN:
  case SDL_JOYBUTTONUP:
  {
    break;
  }
  case SDL_JOYDEVICEADDED:
  case SDL_JOYDEVICEREMOVED:
  {
    break;
  }
  case SDL_CONTROLLERAXISMOTION:
  {
    break;
  }
  case SDL_CONTROLLERBUTTONDOWN:
  case SDL_CONTROLLERBUTTONUP:
  {
    break;
  }
  case SDL_CONTROLLERDEVICEADDED:
  case SDL_CONTROLLERDEVICEREMOVED:
  case SDL_CONTROLLERDEVICEREMAPPED:
  {
    break;
  }
  case SDL_AUDIODEVICEADDED:
  case SDL_AUDIODEVICEREMOVED:
  {
    break;
  }
  case SDL_FINGERMOTION:
  case SDL_FINGERDOWN:
  case SDL_FINGERUP:
  {
    break;
  }
  case SDL_MULTIGESTURE:
  {
    break;
  }
  case SDL_DOLLARGESTURE:
  case SDL_DOLLARRECORD:
  {
    break;
  }
  case SDL_DROPBEGIN:
  case SDL_DROPFILE:
  case SDL_DROPTEXT:
  case SDL_DROPCOMPLETE:
  {
    break;
  }
  case SDL_SENSORUPDATE:
  {
    break;
  }
  case SDL_QUIT:
  {
    break;
  }
  case SDL_SYSWMEVENT:
  {
    break;
  }
  default:
  {
    // Remaining events might be user events.
    if ((event.common.type >= SDL_USEREVENT) && (event.common.type < SDL_LASTEVENT))
    {
      break;
    }
  }
  }

  return retval;
}

//===========================================================================
void create_sdl_event(napi_env env, napi_value exports)
{
  export_function(env, exports, "PumpEvents", napi_SDL_PumpEvents);
  export_function(env, exports, "HasEvent", napi_SDL_HasEvent);
  export_function(env, exports, "HasEvents", napi_SDL_HasEvent);
  export_function(env, exports, "FlushEvent", napi_SDL_FlushEvent);
  export_function(env, exports, "FlushEvents", napi_SDL_FlushEvents);
}

//===========================================================================
napi_value napi_SDL_PumpEvents(napi_env env, napi_callback_info info)
{
  SDL_PumpEvents();

  return nullptr;
}

//===========================================================================
napi_value napi_SDL_HasEvent(napi_env env, napi_callback_info info)
{
  napi_value argv[1];
  GET_ARGS(1);

  uint32_t type;
  ASSERT_OK(napi_get_value_uint32(env, argv[0], &type), "EINVAL", "Argument type error.");

  SDL_bool result = SDL_HasEvent(type);

  napi_value retval;
  ASSERT_OK(napi_get_boolean(env, result, &retval), "EINVAL", "Return type error");
  return retval;
}

//===========================================================================
napi_value napi_SDL_HasEvents(napi_env env, napi_callback_info info)
{
  napi_value argv[2];
  GET_ARGS(2);

  uint32_t minType;
  ASSERT_OK(napi_get_value_uint32(env, argv[0], &minType), "EINVAL", "Argument type error.");

  uint32_t maxType;
  ASSERT_OK(napi_get_value_uint32(env, argv[1], &maxType), "EINVAL", "Argument type error.");

  SDL_bool result = SDL_HasEvents(minType, maxType);

  napi_value retval;
  ASSERT_OK(napi_get_boolean(env, result, &retval), "EINVAL", "Return type error");
  return retval;
}

//===========================================================================
napi_value napi_SDL_FlushEvent(napi_env env, napi_callback_info info)
{
  napi_value argv[1];
  GET_ARGS(1);

  uint32_t type;
  ASSERT_OK(napi_get_value_uint32(env, argv[0], &type), "EINVAL", "Argument type error.");

  SDL_FlushEvent(type);

  return nullptr;
}

//===========================================================================
napi_value napi_SDL_FlushEvents(napi_env env, napi_callback_info info)
{
  napi_value argv[2];
  GET_ARGS(2);

  uint32_t minType;
  ASSERT_OK(napi_get_value_uint32(env, argv[0], &minType), "EINVAL", "Argument type error.");

  uint32_t maxType;
  ASSERT_OK(napi_get_value_uint32(env, argv[1], &maxType), "EINVAL", "Argument type error.");

  SDL_FlushEvents(minType, maxType);

  return nullptr;
}

//===========================================================================
napi_value napi_SDL_PollEvent(napi_env env, napi_callback_info info)
{
  SDL_Event event;
  int result = SDL_PollEvent(&event);

  return (result) ? convert_SDL_event(env, event) : nullptr;
}
