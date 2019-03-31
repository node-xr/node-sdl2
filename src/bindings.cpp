#include "sdl/events.hpp"
#include "sdl/quit.hpp"
#include "sdl/sdl.hpp"
#include "sdl/syswm.hpp"
#include "sdl/video.hpp"
#include "util.hpp"

#include <node_api.h>

static napi_value Init(napi_env env, napi_value exports)
{
  create_sdl(env, exports);
  create_sdl_events(env, exports);
  create_sdl_quit(env, exports);
  create_sdl_syswm(env, exports);
  create_sdl_video(env, exports);

  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init);
