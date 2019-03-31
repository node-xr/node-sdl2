#include "video.hpp"
#include "../util.hpp"

#include <SDL_video.h>

void create_sdl_video(napi_env env, napi_value exports)
{
  export_function(env, exports, "CreateWindow", napi_SDL_CreateWindow);
  export_function(env, exports, "DestroyWindow", napi_SDL_DestroyWindow);
}

//===========================================================================
napi_value napi_SDL_CreateWindow(napi_env env, napi_callback_info info)
{
  napi_value argv[6];
  GET_ARGS(6);

  char title[2048];
  ASSERT_OK(napi_get_value_string_utf8(env, argv[0], title, 2048, nullptr), "EINVAL", "Argument type error.");

  int32_t x;
  ASSERT_OK(napi_get_value_int32(env, argv[1], &x), "EINVAL", "Argument type error.");

  int32_t y;
  ASSERT_OK(napi_get_value_int32(env, argv[2], &y), "EINVAL", "Argument type error.");

  int32_t w;
  ASSERT_OK(napi_get_value_int32(env, argv[3], &w), "EINVAL", "Argument type error.");

  int32_t h;
  ASSERT_OK(napi_get_value_int32(env, argv[4], &h), "EINVAL", "Argument type error.");

  uint32_t flags;
  ASSERT_OK(napi_get_value_uint32(env, argv[5], &flags), "EINVAL", "Argument type error.");

  SDL_Window *window = SDL_CreateWindow(title, x, y, w, h, flags);

  napi_value retval;
  ASSERT_OK(napi_create_external(env, window, nullptr, nullptr, &retval), "EINVAL", "Return type error");
  return retval;
}

//===========================================================================
napi_value napi_SDL_DestroyWindow(napi_env env, napi_callback_info info)
{
  napi_value argv[1];
  GET_ARGS(1);

  SDL_Window *window;
  ASSERT_OK(napi_get_value_external(env, argv[0], (void **)&window), "EINVAL", "Argument type error.");

  SDL_DestroyWindow(window);

  return nullptr;
}
