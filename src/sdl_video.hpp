#pragma once

#include "util.hpp"
#include <node_api.h>

void create_sdl_video(napi_env env, napi_value exports);

napi_value napi_SDL_CreateWindow(napi_env, napi_callback_info info);
napi_value napi_SDL_DestroyWindow(napi_env, napi_callback_info info);
