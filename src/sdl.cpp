#include "sdl.hpp"

#include "SDL.h"

napi_value create_sdl(napi_env env)
{
  napi_value exports;
  ASSERT_OK(napi_create_object(env, &exports), "EINVAL", "Failed to create exports.");

  // export_function(env, exports, "nbgfx_vertex_convert", nbgfx_vertex_convert);

  return exports;
}