#pragma once

#include <node_api.h>

void create_sdl_syswm(napi_env env, napi_value exports);

napi_value napi_SDL_GetWindowWMInfo(napi_env, napi_callback_info info);
