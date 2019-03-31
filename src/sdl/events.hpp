#pragma once

#include <node_api.h>

void create_sdl_events(napi_env env, napi_value exports);

napi_value napi_SDL_PumpEvents(napi_env, napi_callback_info info);
// napi_value napi_SDL_PeepEvents(napi_env env, napi_callback_info info);
napi_value napi_SDL_HasEvent(napi_env env, napi_callback_info info);
napi_value napi_SDL_HasEvents(napi_env env, napi_callback_info info);
napi_value napi_SDL_FlushEvent(napi_env env, napi_callback_info info);
napi_value napi_SDL_FlushEvents(napi_env env, napi_callback_info info);
napi_value napi_SDL_PollEvent(napi_env env, napi_callback_info info);
// napi_value napi_SDL_WaitEvent(napi_env env, napi_callback_info info);
// napi_value napi_SDL_WaitEventTimeout(napi_env env, napi_callback_info info);
// napi_value napi_SDL_PushEvent(napi_env env, napi_callback_info info);
// napi_value napi_SDL_SetEventFilter(napi_env env, napi_callback_info info);
// napi_value napi_SDL_GetEventFilter(napi_env env, napi_callback_info info);
// napi_value napi_SDL_AddEventWatch(napi_env env, napi_callback_info info);
// napi_value napi_SDL_DelEventWatch(napi_env env, napi_callback_info info);
// napi_value napi_SDL_FilterEvents(napi_env env, napi_callback_info info);
// napi_value napi_SDL_EventState(napi_env env, napi_callback_info info);
// napi_value napi_SDL_GetEventState(napi_env env, napi_callback_info info);
// napi_value napi_SDL_RegisterEvents(napi_env env, napi_callback_info info);
