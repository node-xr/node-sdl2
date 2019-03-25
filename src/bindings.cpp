#include "sdl.hpp"

#include <node_api.h>

static napi_value Init(napi_env env, napi_value exports)
{
  return create_sdl(env);
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)