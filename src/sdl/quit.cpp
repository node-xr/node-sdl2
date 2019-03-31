#include "quit.hpp"
#include "../util.hpp"

#include <SDL_events.h>
#include <SDL_quit.h>

//===========================================================================
void create_sdl_event(napi_env env, napi_value exports)
{
  export_function(env, exports, "QuitRequested", napi_SDL_QuitRequested);
}

//===========================================================================
napi_value napi_SDL_QuitRequested(napi_env env, napi_callback_info info)
{
  bool result = SDL_QuitRequested();

  napi_value retval;
  ASSERT_OK(napi_get_boolean(env, result, &retval), "EINVAL", "Return type error");
  return retval;
}
