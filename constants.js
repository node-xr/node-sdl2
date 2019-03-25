//===========================================================================
// SDL_INIT_*
exports.SDL_INIT_TIMER = 0x00000001;
exports.SDL_INIT_AUDIO = 0x00000010;
exports.SDL_INIT_VIDEO = 0x00000020;
exports.SDL_INIT_JOYSTICK = 0x00000200;
exports.SDL_INIT_HAPTIC = 0x00001000;
exports.SDL_INIT_GAMECONTROLLER = 0x00002000;
exports.SDL_INIT_EVENTS = 0x00004000;
exports.SDL_INIT_SENSOR = 0x00008000;
exports.SDL_INIT_NOPARACHUTE = 0x00100000;
exports.SDL_INIT_EVERYTHING =
  exports.SDL_INIT_TIMER |
  exports.SDL_INIT_AUDIO |
  exports.SDL_INIT_VIDEO |
  exports.SDL_INIT_EVENTS |
  exports.SDL_INIT_JOYSTICK |
  exports.SDL_INIT_HAPTIC |
  exports.SDL_INIT_GAMECONTROLLER |
  exports.SDL_INIT_SENSOR;

//===========================================================================
// SDL_WindowFlags
exports.SDL_WINDOW_FULLSCREEN = 0x00000001;
exports.SDL_WINDOW_OPENGL = 0x00000002;
exports.SDL_WINDOW_SHOWN = 0x00000004;
exports.SDL_WINDOW_HIDDEN = 0x00000008;
exports.SDL_WINDOW_BORDERLESS = 0x00000010;
exports.SDL_WINDOW_RESIZABLE = 0x00000020;
exports.SDL_WINDOW_MINIMIZED = 0x00000040;
exports.SDL_WINDOW_MAXIMIZED = 0x00000080;
exports.SDL_WINDOW_INPUT_GRABBED = 0x00000100;
exports.SDL_WINDOW_INPUT_FOCUS = 0x00000200;
exports.SDL_WINDOW_MOUSE_FOCUS = 0x00000400;
exports.SDL_WINDOW_FULLSCREEN_DESKTOP =
  exports.SDL_WINDOW_FULLSCREEN | 0x00001000;
exports.SDL_WINDOW_FOREIGN = 0x00000800;
exports.SDL_WINDOW_ALLOW_HIGHDPI = 0x00002000;
exports.SDL_WINDOW_MOUSE_CAPTURE = 0x00004000;
exports.SDL_WINDOW_ALWAYS_ON_TOP = 0x00008000;
exports.SDL_WINDOW_SKIP_TASKBAR = 0x00010000;
exports.SDL_WINDOW_UTILITY = 0x00020000;
exports.SDL_WINDOW_TOOLTIP = 0x00040000;
exports.SDL_WINDOW_POPUP_MENU = 0x00080000;
exports.SDL_WINDOW_VULKAN = 0x10000000;