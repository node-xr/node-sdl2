//===========================================================================
// INIT_*
exports.INIT_TIMER = 0x00000001;
exports.INIT_AUDIO = 0x00000010;
exports.INIT_VIDEO = 0x00000020;
exports.INIT_JOYSTICK = 0x00000200;
exports.INIT_HAPTIC = 0x00001000;
exports.INIT_GAMECONTROLLER = 0x00002000;
exports.INIT_EVENTS = 0x00004000;
exports.INIT_SENSOR = 0x00008000;
exports.INIT_NOPARACHUTE = 0x00100000;
exports.INIT_EVERYTHING =
  exports.INIT_TIMER |
  exports.INIT_AUDIO |
  exports.INIT_VIDEO |
  exports.INIT_EVENTS |
  exports.INIT_JOYSTICK |
  exports.INIT_HAPTIC |
  exports.INIT_GAMECONTROLLER |
  exports.INIT_SENSOR;

//===========================================================================
// WindowFlags
exports.WINDOW_FULLSCREEN = 0x00000001;
exports.WINDOW_OPENGL = 0x00000002;
exports.WINDOW_SHOWN = 0x00000004;
exports.WINDOW_HIDDEN = 0x00000008;
exports.WINDOW_BORDERLESS = 0x00000010;
exports.WINDOW_RESIZABLE = 0x00000020;
exports.WINDOW_MINIMIZED = 0x00000040;
exports.WINDOW_MAXIMIZED = 0x00000080;
exports.WINDOW_INPUT_GRABBED = 0x00000100;
exports.WINDOW_INPUT_FOCUS = 0x00000200;
exports.WINDOW_MOUSE_FOCUS = 0x00000400;
exports.WINDOW_FULLSCREEN_DESKTOP = exports.WINDOW_FULLSCREEN | 0x00001000;
exports.WINDOW_FOREIGN = 0x00000800;
exports.WINDOW_ALLOW_HIGHDPI = 0x00002000;
exports.WINDOW_MOUSE_CAPTURE = 0x00004000;
exports.WINDOW_ALWAYS_ON_TOP = 0x00008000;
exports.WINDOW_SKIP_TASKBAR = 0x00010000;
exports.WINDOW_UTILITY = 0x00020000;
exports.WINDOW_TOOLTIP = 0x00040000;
exports.WINDOW_POPUP_MENU = 0x00080000;
exports.WINDOW_VULKAN = 0x10000000;

exports.WINDOWPOS_UNDEFINED_MASK = 0x1fff0000;
exports.WINDOWPOS_UNDEFINED_DISPLAY = X => exports.WINDOWPOS_UNDEFINED_MASK | X;
exports.WINDOWPOS_UNDEFINED = exports.WINDOWPOS_UNDEFINED_DISPLAY(0);
exports.WINDOWPOS_ISUNDEFINED = X =>
  (X & 0xffff0000) == exports.WINDOWPOS_UNDEFINED_MASK;

exports.WINDOWPOS_CENTERED_MASK = 0x2fff0000;
exports.WINDOWPOS_CENTERED_DISPLAY = X => exports.WINDOWPOS_CENTERED_MASK | X;
exports.WINDOWPOS_CENTERED = exports.WINDOWPOS_CENTERED_DISPLAY(0);
exports.WINDOWPOS_ISCENTERED = X =>
  (X & 0xffff0000) == exports.WINDOWPOS_CENTERED_MASK;

//===========================================================================
// SYSWM_TYPE
exports.SYSWM_UNKNOWN = 0;
exports.SYSWM_WINDOWS = 1;
exports.SYSWM_X11 = 2;
exports.SYSWM_DIRECTFB = 3;
exports.SYSWM_COCOA = 4;
exports.SYSWM_UIKIT = 5;
exports.SYSWM_WAYLAND = 6;
exports.SYSWM_MIR = 7;
exports.SYSWM_WINRT = 8;
exports.SYSWM_ANDROID = 9;
exports.SYSWM_VIVANTE = 10;
exports.SYSWM_OS2 = 11;
