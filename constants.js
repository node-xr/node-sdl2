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

//===========================================================================
// SDL_scancode.h
// SDL_Scancode
exports.SCANCODE_UNKNOWN = 0;
exports.SCANCODE_A = 4;
exports.SCANCODE_B = 5;
exports.SCANCODE_C = 6;
exports.SCANCODE_D = 7;
exports.SCANCODE_E = 8;
exports.SCANCODE_F = 9;
exports.SCANCODE_G = 10;
exports.SCANCODE_H = 11;
exports.SCANCODE_I = 12;
exports.SCANCODE_J = 13;
exports.SCANCODE_K = 14;
exports.SCANCODE_L = 15;
exports.SCANCODE_M = 16;
exports.SCANCODE_N = 17;
exports.SCANCODE_O = 18;
exports.SCANCODE_P = 19;
exports.SCANCODE_Q = 20;
exports.SCANCODE_R = 21;
exports.SCANCODE_S = 22;
exports.SCANCODE_T = 23;
exports.SCANCODE_U = 24;
exports.SCANCODE_V = 25;
exports.SCANCODE_W = 26;
exports.SCANCODE_X = 27;
exports.SCANCODE_Y = 28;
exports.SCANCODE_Z = 29;

exports.SCANCODE_1 = 30;
exports.SCANCODE_2 = 31;
exports.SCANCODE_3 = 32;
exports.SCANCODE_4 = 33;
exports.SCANCODE_5 = 34;
exports.SCANCODE_6 = 35;
exports.SCANCODE_7 = 36;
exports.SCANCODE_8 = 37;
exports.SCANCODE_9 = 38;
exports.SCANCODE_0 = 39;

exports.SCANCODE_RETURN = 40;
exports.SCANCODE_ESCAPE = 41;
exports.SCANCODE_BACKSPACE = 42;
exports.SCANCODE_TAB = 43;
exports.SCANCODE_SPACE = 44;

exports.SCANCODE_MINUS = 45;
exports.SCANCODE_EQUALS = 46;
exports.SCANCODE_LEFTBRACKET = 47;
exports.SCANCODE_RIGHTBRACKET = 48;
exports.SCANCODE_BACKSLASH = 49;
exports.SCANCODE_NONUSHASH = 50;
exports.SCANCODE_SEMICOLON = 51;
exports.SCANCODE_APOSTROPHE = 52;
exports.SCANCODE_GRAVE = 53;
exports.SCANCODE_COMMA = 54;
exports.SCANCODE_PERIOD = 55;
exports.SCANCODE_SLASH = 56;

exports.SCANCODE_CAPSLOCK = 57;

exports.SCANCODE_F1 = 58;
exports.SCANCODE_F2 = 59;
exports.SCANCODE_F3 = 60;
exports.SCANCODE_F4 = 61;
exports.SCANCODE_F5 = 62;
exports.SCANCODE_F6 = 63;
exports.SCANCODE_F7 = 64;
exports.SCANCODE_F8 = 65;
exports.SCANCODE_F9 = 66;
exports.SCANCODE_F10 = 67;
exports.SCANCODE_F11 = 68;
exports.SCANCODE_F12 = 69;

exports.SCANCODE_PRINTSCREEN = 70;
exports.SCANCODE_SCROLLLOCK = 71;
exports.SCANCODE_PAUSE = 72;
exports.SCANCODE_INSERT = 73;
exports.SCANCODE_HOME = 74;
exports.SCANCODE_PAGEUP = 75;
exports.SCANCODE_DELETE = 76;
exports.SCANCODE_END = 77;
exports.SCANCODE_PAGEDOWN = 78;
exports.SCANCODE_RIGHT = 79;
exports.SCANCODE_LEFT = 80;
exports.SCANCODE_DOWN = 81;
exports.SCANCODE_UP = 82;

exports.SCANCODE_NUMLOCKCLEAR = 83;
exports.SCANCODE_KP_DIVIDE = 84;
exports.SCANCODE_KP_MULTIPLY = 85;
exports.SCANCODE_KP_MINUS = 86;
exports.SCANCODE_KP_PLUS = 87;
exports.SCANCODE_KP_ENTER = 88;
exports.SCANCODE_KP_1 = 89;
exports.SCANCODE_KP_2 = 90;
exports.SCANCODE_KP_3 = 91;
exports.SCANCODE_KP_4 = 92;
exports.SCANCODE_KP_5 = 93;
exports.SCANCODE_KP_6 = 94;
exports.SCANCODE_KP_7 = 95;
exports.SCANCODE_KP_8 = 96;
exports.SCANCODE_KP_9 = 97;
exports.SCANCODE_KP_0 = 98;
exports.SCANCODE_KP_PERIOD = 99;

exports.SCANCODE_NONUSBACKSLASH = 100;
exports.SCANCODE_APPLICATION = 101;
exports.SCANCODE_POWER = 102;
exports.SCANCODE_KP_EQUALS = 103;
exports.SCANCODE_F13 = 104;
exports.SCANCODE_F14 = 105;
exports.SCANCODE_F15 = 106;
exports.SCANCODE_F16 = 107;
exports.SCANCODE_F17 = 108;
exports.SCANCODE_F18 = 109;
exports.SCANCODE_F19 = 110;
exports.SCANCODE_F20 = 111;
exports.SCANCODE_F21 = 112;
exports.SCANCODE_F22 = 113;
exports.SCANCODE_F23 = 114;
exports.SCANCODE_F24 = 115;
exports.SCANCODE_EXECUTE = 116;
exports.SCANCODE_HELP = 117;
exports.SCANCODE_MENU = 118;
exports.SCANCODE_SELECT = 119;
exports.SCANCODE_STOP = 120;
exports.SCANCODE_AGAIN = 121; /**< redo */
exports.SCANCODE_UNDO = 122;
exports.SCANCODE_CUT = 123;
exports.SCANCODE_COPY = 124;
exports.SCANCODE_PASTE = 125;
exports.SCANCODE_FIND = 126;
exports.SCANCODE_MUTE = 127;
exports.SCANCODE_VOLUMEUP = 128;
exports.SCANCODE_VOLUMEDOWN = 129;
// not sure whether there's a reason to enable these
// exports.SCANCODE_LOCKINGCAPSLOCK = 130;
// exports.SCANCODE_LOCKINGNUMLOCK = 131;
// exports.SCANCODE_LOCKINGSCROLLLOCK = 132;
exports.SCANCODE_KP_COMMA = 133;
exports.SCANCODE_KP_EQUALSAS400 = 134;

exports.SCANCODE_INTERNATIONAL1 = 135;
exports.SCANCODE_INTERNATIONAL2 = 136;
exports.SCANCODE_INTERNATIONAL3 = 137;
exports.SCANCODE_INTERNATIONAL4 = 138;
exports.SCANCODE_INTERNATIONAL5 = 139;
exports.SCANCODE_INTERNATIONAL6 = 140;
exports.SCANCODE_INTERNATIONAL7 = 141;
exports.SCANCODE_INTERNATIONAL8 = 142;
exports.SCANCODE_INTERNATIONAL9 = 143;
exports.SCANCODE_LANG1 = 144;
exports.SCANCODE_LANG2 = 145;
exports.SCANCODE_LANG3 = 146;
exports.SCANCODE_LANG4 = 147;
exports.SCANCODE_LANG5 = 148;
exports.SCANCODE_LANG6 = 149;
exports.SCANCODE_LANG7 = 150;
exports.SCANCODE_LANG8 = 151;
exports.SCANCODE_LANG9 = 152;

exports.SCANCODE_ALTERASE = 153;
exports.SCANCODE_SYSREQ = 154;
exports.SCANCODE_CANCEL = 155;
exports.SCANCODE_CLEAR = 156;
exports.SCANCODE_PRIOR = 157;
exports.SCANCODE_RETURN2 = 158;
exports.SCANCODE_SEPARATOR = 159;
exports.SCANCODE_OUT = 160;
exports.SCANCODE_OPER = 161;
exports.SCANCODE_CLEARAGAIN = 162;
exports.SCANCODE_CRSEL = 163;
exports.SCANCODE_EXSEL = 164;

exports.SCANCODE_KP_00 = 176;
exports.SCANCODE_KP_000 = 177;
exports.SCANCODE_THOUSANDSSEPARATOR = 178;
exports.SCANCODE_DECIMALSEPARATOR = 179;
exports.SCANCODE_CURRENCYUNIT = 180;
exports.SCANCODE_CURRENCYSUBUNIT = 181;
exports.SCANCODE_KP_LEFTPAREN = 182;
exports.SCANCODE_KP_RIGHTPAREN = 183;
exports.SCANCODE_KP_LEFTBRACE = 184;
exports.SCANCODE_KP_RIGHTBRACE = 185;
exports.SCANCODE_KP_TAB = 186;
exports.SCANCODE_KP_BACKSPACE = 187;
exports.SCANCODE_KP_A = 188;
exports.SCANCODE_KP_B = 189;
exports.SCANCODE_KP_C = 190;
exports.SCANCODE_KP_D = 191;
exports.SCANCODE_KP_E = 192;
exports.SCANCODE_KP_F = 193;
exports.SCANCODE_KP_XOR = 194;
exports.SCANCODE_KP_POWER = 195;
exports.SCANCODE_KP_PERCENT = 196;
exports.SCANCODE_KP_LESS = 197;
exports.SCANCODE_KP_GREATER = 198;
exports.SCANCODE_KP_AMPERSAND = 199;
exports.SCANCODE_KP_DBLAMPERSAND = 200;
exports.SCANCODE_KP_VERTICALBAR = 201;
exports.SCANCODE_KP_DBLVERTICALBAR = 202;
exports.SCANCODE_KP_COLON = 203;
exports.SCANCODE_KP_HASH = 204;
exports.SCANCODE_KP_SPACE = 205;
exports.SCANCODE_KP_AT = 206;
exports.SCANCODE_KP_EXCLAM = 207;
exports.SCANCODE_KP_MEMSTORE = 208;
exports.SCANCODE_KP_MEMRECALL = 209;
exports.SCANCODE_KP_MEMCLEAR = 210;
exports.SCANCODE_KP_MEMADD = 211;
exports.SCANCODE_KP_MEMSUBTRACT = 212;
exports.SCANCODE_KP_MEMMULTIPLY = 213;
exports.SCANCODE_KP_MEMDIVIDE = 214;
exports.SCANCODE_KP_PLUSMINUS = 215;
exports.SCANCODE_KP_CLEAR = 216;
exports.SCANCODE_KP_CLEARENTRY = 217;
exports.SCANCODE_KP_BINARY = 218;
exports.SCANCODE_KP_OCTAL = 219;
exports.SCANCODE_KP_DECIMAL = 220;
exports.SCANCODE_KP_HEXADECIMAL = 221;

exports.SCANCODE_LCTRL = 224;
exports.SCANCODE_LSHIFT = 225;
exports.SCANCODE_LALT = 226;
exports.SCANCODE_LGUI = 227;
exports.SCANCODE_RCTRL = 228;
exports.SCANCODE_RSHIFT = 229;
exports.SCANCODE_RALT = 230;
exports.SCANCODE_RGUI = 231;

exports.SCANCODE_MODE = 257;

exports.SCANCODE_AUDIONEXT = 258;
exports.SCANCODE_AUDIOPREV = 259;
exports.SCANCODE_AUDIOSTOP = 260;
exports.SCANCODE_AUDIOPLAY = 261;
exports.SCANCODE_AUDIOMUTE = 262;
exports.SCANCODE_MEDIASELECT = 263;
exports.SCANCODE_WWW = 264;
exports.SCANCODE_MAIL = 265;
exports.SCANCODE_CALCULATOR = 266;
exports.SCANCODE_COMPUTER = 267;
exports.SCANCODE_AC_SEARCH = 268;
exports.SCANCODE_AC_HOME = 269;
exports.SCANCODE_AC_BACK = 270;
exports.SCANCODE_AC_FORWARD = 271;
exports.SCANCODE_AC_STOP = 272;
exports.SCANCODE_AC_REFRESH = 273;
exports.SCANCODE_AC_BOOKMARKS = 274;

exports.SCANCODE_BRIGHTNESSDOWN = 275;
exports.SCANCODE_BRIGHTNESSUP = 276;
exports.SCANCODE_DISPLAYSWITCH = 277;
exports.SCANCODE_KBDILLUMTOGGLE = 278;
exports.SCANCODE_KBDILLUMDOWN = 279;
exports.SCANCODE_KBDILLUMUP = 280;
exports.SCANCODE_EJECT = 281;
exports.SCANCODE_SLEEP = 282;

exports.SCANCODE_APP1 = 283;
exports.SCANCODE_APP2 = 284;

exports.SCANCODE_AUDIOREWIND = 285;
exports.SCANCODE_AUDIOFASTFORWARD = 286;
