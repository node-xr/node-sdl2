#include "sdl.hpp"

#include "SDL.h"

void create_sdl(napi_env env, napi_value exports)
{
  export_function(env, exports, "SDL_Init", napi_SDL_Init);
  export_function(env, exports, "SDL_InitSubSystem", napi_SDL_InitSubSystem);
  export_function(env, exports, "SDL_QuitSubSystem", napi_SDL_QuitSubSystem);
  export_function(env, exports, "SDL_WasInit", napi_SDL_WasInit);
  export_function(env, exports, "SDL_Quit", napi_SDL_Quit);
}

/////////////////////////////////////////////////////////////////////////////
napi_value napi_SDL_Init(napi_env env, napi_callback_info info)
{
  napi_value argv[1];
  GET_ARGS(1);

  uint32_t flags;
  ASSERT_OK(napi_get_value_uint32(env, argv[0], &flags), "EINVAL", "Argument type error.");

  int result = SDL_Init(flags);

  napi_value retval;
  ASSERT_OK(napi_create_int32(env, (int32_t)result, &retval), "EINVAL", "Return type error");
  return retval;
}

/////////////////////////////////////////////////////////////////////////////
napi_value napi_SDL_InitSubSystem(napi_env env, napi_callback_info info)
{
  napi_value argv[1];
  GET_ARGS(1);

  uint32_t flags;
  ASSERT_OK(napi_get_value_uint32(env, argv[0], &flags), "EINVAL", "Argument type error.");

  int result = SDL_InitSubSystem(flags);

  napi_value retval;
  ASSERT_OK(napi_create_int32(env, (int32_t)result, &retval), "EINVAL", "Return type error");
  return retval;
}

/////////////////////////////////////////////////////////////////////////////
napi_value napi_SDL_QuitSubSystem(napi_env env, napi_callback_info info)
{
  napi_value argv[1];
  GET_ARGS(1);

  uint32_t flags;
  ASSERT_OK(napi_get_value_uint32(env, argv[0], &flags), "EINVAL", "Argument type error.");

  SDL_QuitSubSystem(flags);

  return nullptr;
}

/////////////////////////////////////////////////////////////////////////////
napi_value napi_SDL_WasInit(napi_env env, napi_callback_info info)
{
  napi_value argv[1];
  GET_ARGS(1);

  uint32_t flags;
  ASSERT_OK(napi_get_value_uint32(env, argv[0], &flags), "EINVAL", "Argument type error.");

  uint32_t result = SDL_WasInit(flags);

  napi_value retval;
  ASSERT_OK(napi_create_uint32(env, result, &retval), "EINVAL", "Return type error");
  return retval;
}

/////////////////////////////////////////////////////////////////////////////
napi_value napi_SDL_Quit(napi_env env, napi_callback_info info)
{
  SDL_Quit();

  return nullptr;
}
