//===========================================================================
// SDL.h
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
// SDL_video.h
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
// SDL_syswm.h
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

//===========================================================================
// SDL_events.h
// General keyboard/mouse state definitions
exports.RELEASED = 0;
exports.PRESSED = 1;

//===========================================================================
// SDL_events.h
// SDL_EventType

// Application events
exports.QUIT = 0x100;
exports.APP_TERMINATING = 0x101;
exports.APP_LOWMEMORY = 0x102;
exports.APP_WILLENTERBACKGROUND = 0x103;
exports.APP_DIDENTERBACKGROUND = 0x104;
exports.APP_WILLENTERFOREGROUND = 0x105;
exports.APP_DIDENTERFOREGROUND = 0x106;

// Display events
exports.DISPLAYEVENT = 0x150;

// Window events
exports.WINDOWEVENT = 0x200;
exports.SYSWMEVENT = 0x201;

// Keyboard events
exports.KEYDOWN = 0x300;
exports.KEYUP = 0x301;
exports.TEXTEDITING = 0x302;
exports.TEXTINPUT = 0x303;
exports.KEYMAPCHANGED = 0x304;

// Mouse events
exports.MOUSEMOTION = 0x400;
exports.MOUSEBUTTONDOWN = 0x401;
exports.MOUSEBUTTONUP = 0x402;
exports.MOUSEWHEEL = 0x403;

// Joystick events
exports.JOYAXISMOTION = 0x600;
exports.JOYBALLMOTION = 0x601;
exports.JOYHATMOTION = 0x602;
exports.JOYBUTTONDOWN = 0x603;
exports.JOYBUTTONUP = 0x604;
exports.JOYDEVICEADDED = 0x605;
exports.JOYDEVICEREMOVED = 0x606;

// Game controller events
exports.CONTROLLERAXISMOTION = 0x650;
exports.CONTROLLERBUTTONDOWN = 0x651;
exports.CONTROLLERBUTTONUP = 0x652;
exports.CONTROLLERDEVICEADDED = 0x653;
exports.CONTROLLERDEVICEREMOVED = 0x654;
exports.CONTROLLERDEVICEREMAPPED = 0x655;

// Touch events
exports.FINGERDOWN = 0x700;
exports.FINGERUP = 0x701;
exports.FINGERMOTION = 0x702;

// Gesture events
exports.DOLLARGESTURE = 0x800;
exports.DOLLARRECORD = 0x801;
exports.MULTIGESTURE = 0x802;

// Clipboard events
exports.CLIPBOARDUPDATE = 0x900;

// Drag and drop events
exports.DROPFILE = 0x1000;
exports.DROPTEXT = 0x1001;
exports.DROPBEGIN = 0x1002;
exports.DROPCOMPLETE = 0x1003;

// Audio hotplug events
exports.AUDIODEVICEADDED = 0x1100;
exports.AUDIODEVICEREMOVED = 0x1101;

// Sensor events
exports.SENSORUPDATE = 0x1200;

// Render events
exports.RENDER_TARGETS_RESET = 0x2000;
exports.RENDER_DEVICE_RESET = 0x2001;

// Events ::SDL_USEREVENT through ::SDL_LASTEVENT are for your use;
// and should be allocated with SDL_RegisterEvents()
exports.USEREVENT = 0x8000;

//===========================================================================
// SDL_events.h
// SDL_eventaction
exports.ADDEVENT = 0;
exports.PEEKEVENT = 1;
exports.GETEVENT = 2;

//===========================================================================
// SDL_events.h
// SDL event state operations
exports.QUERY = -1;
exports.IGNORE = 0;
exports.DISABLE = 0;
exports.ENABLE = 1;
