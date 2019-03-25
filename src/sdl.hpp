#pragma once

#include "util.hpp"
#include <node_api.h>

napi_value create_sdl(napi_env env, napi_value exports);

napi_value napi_SDL_Init(napi_env, napi_callback_info info);
napi_value napi_SDL_InitSubSystem(napi_env env, napi_callback_info info);
napi_value napi_SDL_QuitSubSystem(napi_env env, napi_callback_info info);
napi_value napi_SDL_WasInit(napi_env env, napi_callback_info info);
napi_value napi_SDL_Quit(napi_env env, napi_callback_info info);