#include "events.hpp"
#include "../util.hpp"

#include <SDL_events.h>

napi_value convert_SDL_event(napi_env env, const SDL_Event &event)
{
  napi_value retval;
  ASSERT_OK(napi_create_object(env, &retval), "EINVAL", "Failed to create SDL_event.");

  // Fields shared by every event.
  SET_PROPERTY(retval, uint32, "type", event.type);
  SET_PROPERTY(retval, uint32, "timestamp", event.common.timestamp);

  switch (event.type)
  {
  case SDL_DISPLAYEVENT:
  {
    SDL_DisplayEvent args = event.display;
    SET_PROPERTY(retval, uint32, "display", args.display);
    SET_PROPERTY(retval, uint32, "event", args.event);
    SET_PROPERTY(retval, int32, "data1", args.data1);
    break;
  }
  case SDL_WINDOWEVENT:
  {
    SDL_WindowEvent args = event.window;
    SET_PROPERTY(retval, uint32, "windowID", args.windowID);
    SET_PROPERTY(retval, uint32, "event", args.event);
    SET_PROPERTY(retval, int32, "data1", args.data1);
    SET_PROPERTY(retval, int32, "data2", args.data2);
    break;
  }
  case SDL_KEYDOWN:
    /* fall through */
  case SDL_KEYUP:
  {
    SDL_KeyboardEvent args = event.key;
    SET_PROPERTY(retval, uint32, "windowID", args.windowID);
    SET_PROPERTY(retval, uint32, "state", args.state);
    SET_PROPERTY(retval, uint32, "repeat", args.repeat);

    napi_value keysym;
    ASSERT_OK(napi_create_object(env, &keysym), "EINVAL", "Failed to create SDL_event.");
    {
      SET_PROPERTY(keysym, uint32, "scancode", args.keysym.scancode);
      SET_PROPERTY(keysym, int32, "sym", args.keysym.sym);
      SET_PROPERTY(keysym, uint32, "mod", args.keysym.mod);
    }
    ASSERT_OK(napi_set_named_property(env, retval, "keysym", keysym), "EINVAL", "Property setting error.");
    break;
  }
  case SDL_TEXTEDITING:
  {
    SDL_TextEditingEvent args = event.edit;
    SET_PROPERTY(retval, uint32, "windowID", args.windowID);
    SET_PROPERTY_TEXT(retval, "text", args.text, SDL_TEXTEDITINGEVENT_TEXT_SIZE);
    SET_PROPERTY(retval, int32, "start", args.start);
    SET_PROPERTY(retval, int32, "length", args.length);
    break;
  }
  case SDL_TEXTINPUT:
  {
    SDL_TextInputEvent args = event.text;
    SET_PROPERTY(retval, uint32, "windowID", args.windowID);
    SET_PROPERTY_TEXT(retval, "text", args.text, SDL_TEXTINPUTEVENT_TEXT_SIZE);
    break;
  }
  case SDL_MOUSEMOTION:
  {
    SDL_MouseMotionEvent args = event.motion;
    SET_PROPERTY(retval, uint32, "windowID", args.windowID);
    SET_PROPERTY(retval, uint32, "which", args.which);
    SET_PROPERTY(retval, uint32, "state", args.state);
    SET_PROPERTY(retval, int32, "x", args.x);
    SET_PROPERTY(retval, int32, "y", args.y);
    SET_PROPERTY(retval, int32, "xrel", args.xrel);
    SET_PROPERTY(retval, int32, "yrel", args.yrel);
    break;
  }
  case SDL_MOUSEBUTTONDOWN:
    /* fall through */
  case SDL_MOUSEBUTTONUP:
  {
    SDL_MouseButtonEvent args = event.button;
    SET_PROPERTY(retval, uint32, "windowID", args.windowID);
    SET_PROPERTY(retval, uint32, "which", args.which);
    SET_PROPERTY(retval, uint32, "button", args.button);
    SET_PROPERTY(retval, uint32, "state", args.state);
    SET_PROPERTY(retval, uint32, "clicks", args.clicks);
    SET_PROPERTY(retval, int32, "x", args.x);
    SET_PROPERTY(retval, int32, "y", args.y);
    break;
  }
  case SDL_MOUSEWHEEL:
  {
    SDL_MouseWheelEvent args = event.wheel;
    SET_PROPERTY(retval, uint32, "windowID", args.windowID);
    SET_PROPERTY(retval, uint32, "which", args.which);
    SET_PROPERTY(retval, int32, "x", args.x);
    SET_PROPERTY(retval, int32, "y", args.y);
    SET_PROPERTY(retval, uint32, "direction", args.direction);
    break;
  }
  case SDL_JOYAXISMOTION:
  {
    SDL_JoyAxisEvent args = event.jaxis;
    SET_PROPERTY(retval, int32, "which", args.which);
    SET_PROPERTY(retval, uint32, "axis", args.axis);
    SET_PROPERTY(retval, int32, "value", args.value);
    break;
  }
  case SDL_JOYBALLMOTION:
  {
    SDL_JoyBallEvent args = event.jball;
    SET_PROPERTY(retval, int32, "which", args.which);
    SET_PROPERTY(retval, uint32, "ball", args.ball);
    SET_PROPERTY(retval, int32, "xrel", args.xrel);
    SET_PROPERTY(retval, int32, "yrel", args.yrel);
    break;
  }
  case SDL_JOYHATMOTION:
  {
    SDL_JoyHatEvent args = event.jhat;
    SET_PROPERTY(retval, int32, "which", args.which);
    SET_PROPERTY(retval, uint32, "hat", args.hat);
    SET_PROPERTY(retval, uint32, "value", args.value);
    break;
  }
  case SDL_JOYBUTTONDOWN:
    /* fall through */
  case SDL_JOYBUTTONUP:
  {
    SDL_JoyButtonEvent args = event.jbutton;
    SET_PROPERTY(retval, int32, "which", args.which);
    SET_PROPERTY(retval, uint32, "button", args.button);
    SET_PROPERTY(retval, uint32, "state", args.state);
    break;
  }
  case SDL_JOYDEVICEADDED:
    /* fall through */
  case SDL_JOYDEVICEREMOVED:
  {
    SDL_JoyDeviceEvent args = event.jdevice;
    SET_PROPERTY(retval, int32, "which", args.which);
    break;
  }
  case SDL_CONTROLLERAXISMOTION:
  {
    SDL_ControllerAxisEvent args = event.caxis;
    SET_PROPERTY(retval, int32, "which", args.which);
    SET_PROPERTY(retval, uint32, "axis", args.axis);
    SET_PROPERTY(retval, int32, "value", args.value);
    break;
  }
  case SDL_CONTROLLERBUTTONDOWN:
    /* fall through */
  case SDL_CONTROLLERBUTTONUP:
  {
    SDL_ControllerButtonEvent args = event.cbutton;
    SET_PROPERTY(retval, int32, "which", args.which);
    SET_PROPERTY(retval, uint32, "button", args.button);
    SET_PROPERTY(retval, uint32, "state", args.state);
    break;
  }
  case SDL_CONTROLLERDEVICEADDED:
    /* fall through */
  case SDL_CONTROLLERDEVICEREMOVED:
    /* fall through */
  case SDL_CONTROLLERDEVICEREMAPPED:
  {
    SDL_ControllerDeviceEvent args = event.cdevice;
    SET_PROPERTY(retval, int32, "which", args.which);
    break;
  }
  case SDL_AUDIODEVICEADDED:
    /* fall through */
  case SDL_AUDIODEVICEREMOVED:
  {
    SDL_AudioDeviceEvent args = event.adevice;
    SET_PROPERTY(retval, uint32, "which", args.which);
    SET_PROPERTY(retval, uint32, "iscapture", args.iscapture);
    break;
  }
  case SDL_FINGERMOTION:
    /* fall through */
  case SDL_FINGERDOWN:
    /* fall through */
  case SDL_FINGERUP:
  {
    SDL_TouchFingerEvent args = event.tfinger;
    SET_PROPERTY(retval, int64, "touchId", args.touchId);
    SET_PROPERTY(retval, int64, "fingerId", args.fingerId);
    SET_PROPERTY(retval, double, "x", args.x);
    SET_PROPERTY(retval, double, "y", args.y);
    SET_PROPERTY(retval, double, "dx", args.dx);
    SET_PROPERTY(retval, double, "dy", args.dy);
    SET_PROPERTY(retval, double, "pressure", args.pressure);
    break;
  }
  case SDL_MULTIGESTURE:
  {
    SDL_MultiGestureEvent args = event.mgesture;
    SET_PROPERTY(retval, int64, "touchId", args.touchId);
    SET_PROPERTY(retval, double, "dTheta", args.dTheta);
    SET_PROPERTY(retval, double, "dDist", args.dDist);
    SET_PROPERTY(retval, double, "x", args.x);
    SET_PROPERTY(retval, double, "y", args.y);
    SET_PROPERTY(retval, uint32, "numFingers", args.numFingers);
    SET_PROPERTY(retval, uint32, "padding", args.padding);
    break;
  }
  case SDL_DOLLARGESTURE:
    /* fall through */
  case SDL_DOLLARRECORD:
  {
    SDL_DollarGestureEvent args = event.dgesture;
    SET_PROPERTY(retval, int64, "touchId", args.touchId);
    SET_PROPERTY(retval, int64, "gestureId", args.gestureId);
    SET_PROPERTY(retval, uint32, "numFingers", args.numFingers);
    SET_PROPERTY(retval, double, "error", args.error);
    SET_PROPERTY(retval, double, "x", args.x);
    SET_PROPERTY(retval, double, "y", args.y);
    break;
  }
  case SDL_DROPBEGIN:
    /* fall through */
  case SDL_DROPFILE:
    /* fall through */
  case SDL_DROPTEXT:
    /* fall through */
  case SDL_DROPCOMPLETE:
  {
    SDL_DropEvent args = event.drop;
    SET_PROPERTY(retval, uint32, "windowID", args.windowID);
    // TODO: ".file" is not yet supported because it requires mem management.
    break;
  }
  case SDL_SENSORUPDATE:
  {
    SDL_SensorEvent args = event.sensor;
    SET_PROPERTY(retval, int32, "which", args.which);

    napi_value data = convert_float_array(env, args.data, 6);
    ASSERT_OK(napi_set_named_property(env, retval, "data", data), "EINVAL", "Property setting error.");
    break;
  }
  case SDL_QUIT:
  {
    // No extra fields.
    break;
  }
  case SDL_SYSWMEVENT:
  {
    SDL_SysWMEvent args = event.syswm;
    SET_PROPERTY_EXTERNAL(retval, "msg", args.msg);
    break;
  }
  default:
  {
    // Remaining events might be user events if they fall within this range.
    if ((event.common.type >= SDL_USEREVENT) && (event.common.type < SDL_LASTEVENT))
    {
      SDL_UserEvent args = event.user;
      SET_PROPERTY(retval, uint32, "windowID", args.windowID);
      SET_PROPERTY(retval, int32, "code", args.code);
      SET_PROPERTY_EXTERNAL(retval, "data1", args.data1);
      SET_PROPERTY_EXTERNAL(retval, "data2", args.data2);
      break;
    }
    else
    {
      napi_throw_error(env, "EINVAL", "Invalid event type");
      return nullptr;
    }
  }
  }

  return retval;
}

//===========================================================================
void create_sdl_event(napi_env env, napi_value exports)
{
  export_function(env, exports, "PumpEvents", napi_SDL_PumpEvents);
  export_function(env, exports, "HasEvent", napi_SDL_HasEvent);
  export_function(env, exports, "HasEvents", napi_SDL_HasEvent);
  export_function(env, exports, "FlushEvent", napi_SDL_FlushEvent);
  export_function(env, exports, "FlushEvents", napi_SDL_FlushEvents);
}

//===========================================================================
napi_value napi_SDL_PumpEvents(napi_env env, napi_callback_info info)
{
  SDL_PumpEvents();

  return nullptr;
}

//===========================================================================
napi_value napi_SDL_HasEvent(napi_env env, napi_callback_info info)
{
  napi_value argv[1];
  GET_ARGS(1);

  uint32_t type;
  ASSERT_OK(napi_get_value_uint32(env, argv[0], &type), "EINVAL", "Argument type error.");

  SDL_bool result = SDL_HasEvent(type);

  napi_value retval;
  ASSERT_OK(napi_get_boolean(env, result, &retval), "EINVAL", "Return type error");
  return retval;
}

//===========================================================================
napi_value napi_SDL_HasEvents(napi_env env, napi_callback_info info)
{
  napi_value argv[2];
  GET_ARGS(2);

  uint32_t minType;
  ASSERT_OK(napi_get_value_uint32(env, argv[0], &minType), "EINVAL", "Argument type error.");

  uint32_t maxType;
  ASSERT_OK(napi_get_value_uint32(env, argv[1], &maxType), "EINVAL", "Argument type error.");

  SDL_bool result = SDL_HasEvents(minType, maxType);

  napi_value retval;
  ASSERT_OK(napi_get_boolean(env, result, &retval), "EINVAL", "Return type error");
  return retval;
}

//===========================================================================
napi_value napi_SDL_FlushEvent(napi_env env, napi_callback_info info)
{
  napi_value argv[1];
  GET_ARGS(1);

  uint32_t type;
  ASSERT_OK(napi_get_value_uint32(env, argv[0], &type), "EINVAL", "Argument type error.");

  SDL_FlushEvent(type);

  return nullptr;
}

//===========================================================================
napi_value napi_SDL_FlushEvents(napi_env env, napi_callback_info info)
{
  napi_value argv[2];
  GET_ARGS(2);

  uint32_t minType;
  ASSERT_OK(napi_get_value_uint32(env, argv[0], &minType), "EINVAL", "Argument type error.");

  uint32_t maxType;
  ASSERT_OK(napi_get_value_uint32(env, argv[1], &maxType), "EINVAL", "Argument type error.");

  SDL_FlushEvents(minType, maxType);

  return nullptr;
}

//===========================================================================
napi_value napi_SDL_PollEvent(napi_env env, napi_callback_info info)
{
  SDL_Event event;
  int result = SDL_PollEvent(&event);

  return (result) ? convert_SDL_event(env, event) : nullptr;
}
