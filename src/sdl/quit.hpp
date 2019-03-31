#pragma once

#include <node_api.h>

void create_sdl_quit(napi_env env, napi_value exports);

napi_value napi_SDL_QuitRequested(napi_env env, napi_callback_info info);
