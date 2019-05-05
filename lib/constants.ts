//===========================================================================
// SDL.h
// INIT_*
export const INIT_TIMER = 0x00000001;
export const INIT_AUDIO = 0x00000010;
export const INIT_VIDEO = 0x00000020;
export const INIT_JOYSTICK = 0x00000200;
export const INIT_HAPTIC = 0x00001000;
export const INIT_GAMECONTROLLER = 0x00002000;
export const INIT_EVENTS = 0x00004000;
export const INIT_SENSOR = 0x00008000;
export const INIT_NOPARACHUTE = 0x00100000;
export const INIT_EVERYTHING =
  INIT_TIMER |
  INIT_AUDIO |
  INIT_VIDEO |
  INIT_EVENTS |
  INIT_JOYSTICK |
  INIT_HAPTIC |
  INIT_GAMECONTROLLER |
  INIT_SENSOR;

//===========================================================================
// SDL_video.h
// WindowFlags
export const WINDOW_FULLSCREEN = 0x00000001;
export const WINDOW_OPENGL = 0x00000002;
export const WINDOW_SHOWN = 0x00000004;
export const WINDOW_HIDDEN = 0x00000008;
export const WINDOW_BORDERLESS = 0x00000010;
export const WINDOW_RESIZABLE = 0x00000020;
export const WINDOW_MINIMIZED = 0x00000040;
export const WINDOW_MAXIMIZED = 0x00000080;
export const WINDOW_INPUT_GRABBED = 0x00000100;
export const WINDOW_INPUT_FOCUS = 0x00000200;
export const WINDOW_MOUSE_FOCUS = 0x00000400;
export const WINDOW_FULLSCREEN_DESKTOP = WINDOW_FULLSCREEN | 0x00001000;
export const WINDOW_FOREIGN = 0x00000800;
export const WINDOW_ALLOW_HIGHDPI = 0x00002000;
export const WINDOW_MOUSE_CAPTURE = 0x00004000;
export const WINDOW_ALWAYS_ON_TOP = 0x00008000;
export const WINDOW_SKIP_TASKBAR = 0x00010000;
export const WINDOW_UTILITY = 0x00020000;
export const WINDOW_TOOLTIP = 0x00040000;
export const WINDOW_POPUP_MENU = 0x00080000;
export const WINDOW_VULKAN = 0x10000000;

export const WINDOWPOS_UNDEFINED_MASK = 0x1fff0000;
export const WINDOWPOS_UNDEFINED_DISPLAY = (X: number): number =>
  WINDOWPOS_UNDEFINED_MASK | X;
export const WINDOWPOS_UNDEFINED = WINDOWPOS_UNDEFINED_DISPLAY(0);
export const WINDOWPOS_ISUNDEFINED = (X: number): boolean =>
  (X & 0xffff0000) == WINDOWPOS_UNDEFINED_MASK;

export const WINDOWPOS_CENTERED_MASK = 0x2fff0000;
export const WINDOWPOS_CENTERED_DISPLAY = (X: number): number =>
  WINDOWPOS_CENTERED_MASK | X;
export const WINDOWPOS_CENTERED = WINDOWPOS_CENTERED_DISPLAY(0);
export const WINDOWPOS_ISCENTERED = (X: number): boolean =>
  (X & 0xffff0000) == WINDOWPOS_CENTERED_MASK;

//===========================================================================
// SDL_syswm.h
// SYSWM_TYPE
export const SYSWM_UNKNOWN = 0;
export const SYSWM_WINDOWS = 1;
export const SYSWM_X11 = 2;
export const SYSWM_DIRECTFB = 3;
export const SYSWM_COCOA = 4;
export const SYSWM_UIKIT = 5;
export const SYSWM_WAYLAND = 6;
export const SYSWM_MIR = 7;
export const SYSWM_WINRT = 8;
export const SYSWM_ANDROID = 9;
export const SYSWM_VIVANTE = 10;
export const SYSWM_OS2 = 11;

//===========================================================================
// SDL_events.h
// General keyboard/mouse state definitions
export const RELEASED = 0;
export const PRESSED = 1;

//===========================================================================
// SDL_events.h
// SDL_EventType

// Application events
export const QUIT = 0x100;
export const APP_TERMINATING = 0x101;
export const APP_LOWMEMORY = 0x102;
export const APP_WILLENTERBACKGROUND = 0x103;
export const APP_DIDENTERBACKGROUND = 0x104;
export const APP_WILLENTERFOREGROUND = 0x105;
export const APP_DIDENTERFOREGROUND = 0x106;

// Display events
export const DISPLAYEVENT = 0x150;

// Window events
export const WINDOWEVENT = 0x200;
export const SYSWMEVENT = 0x201;

// Keyboard events
export const KEYDOWN = 0x300;
export const KEYUP = 0x301;
export const TEXTEDITING = 0x302;
export const TEXTINPUT = 0x303;
export const KEYMAPCHANGED = 0x304;

// Mouse events
export const MOUSEMOTION = 0x400;
export const MOUSEBUTTONDOWN = 0x401;
export const MOUSEBUTTONUP = 0x402;
export const MOUSEWHEEL = 0x403;

// Joystick events
export const JOYAXISMOTION = 0x600;
export const JOYBALLMOTION = 0x601;
export const JOYHATMOTION = 0x602;
export const JOYBUTTONDOWN = 0x603;
export const JOYBUTTONUP = 0x604;
export const JOYDEVICEADDED = 0x605;
export const JOYDEVICEREMOVED = 0x606;

// Game controller events
export const CONTROLLERAXISMOTION = 0x650;
export const CONTROLLERBUTTONDOWN = 0x651;
export const CONTROLLERBUTTONUP = 0x652;
export const CONTROLLERDEVICEADDED = 0x653;
export const CONTROLLERDEVICEREMOVED = 0x654;
export const CONTROLLERDEVICEREMAPPED = 0x655;

// Touch events
export const FINGERDOWN = 0x700;
export const FINGERUP = 0x701;
export const FINGERMOTION = 0x702;

// Gesture events
export const DOLLARGESTURE = 0x800;
export const DOLLARRECORD = 0x801;
export const MULTIGESTURE = 0x802;

// Clipboard events
export const CLIPBOARDUPDATE = 0x900;

// Drag and drop events
export const DROPFILE = 0x1000;
export const DROPTEXT = 0x1001;
export const DROPBEGIN = 0x1002;
export const DROPCOMPLETE = 0x1003;

// Audio hotplug events
export const AUDIODEVICEADDED = 0x1100;
export const AUDIODEVICEREMOVED = 0x1101;

// Sensor events
export const SENSORUPDATE = 0x1200;

// Render events
export const RENDER_TARGETS_RESET = 0x2000;
export const RENDER_DEVICE_RESET = 0x2001;

// Events ::SDL_USEREVENT through ::SDL_LASTEVENT are for your use;
// and should be allocated with SDL_RegisterEvents()
export const USEREVENT = 0x8000;

//===========================================================================
// SDL_events.h
// SDL_eventaction
export const ADDEVENT = 0;
export const PEEKEVENT = 1;
export const GETEVENT = 2;

//===========================================================================
// SDL_events.h
// SDL event state operations
export const QUERY = -1;
export const IGNORE = 0;
export const DISABLE = 0;
export const ENABLE = 1;

//===========================================================================
// SDL_scancode.h
// SDL_Scancode
export const SCANCODE_UNKNOWN = 0;
export const SCANCODE_A = 4;
export const SCANCODE_B = 5;
export const SCANCODE_C = 6;
export const SCANCODE_D = 7;
export const SCANCODE_E = 8;
export const SCANCODE_F = 9;
export const SCANCODE_G = 10;
export const SCANCODE_H = 11;
export const SCANCODE_I = 12;
export const SCANCODE_J = 13;
export const SCANCODE_K = 14;
export const SCANCODE_L = 15;
export const SCANCODE_M = 16;
export const SCANCODE_N = 17;
export const SCANCODE_O = 18;
export const SCANCODE_P = 19;
export const SCANCODE_Q = 20;
export const SCANCODE_R = 21;
export const SCANCODE_S = 22;
export const SCANCODE_T = 23;
export const SCANCODE_U = 24;
export const SCANCODE_V = 25;
export const SCANCODE_W = 26;
export const SCANCODE_X = 27;
export const SCANCODE_Y = 28;
export const SCANCODE_Z = 29;

export const SCANCODE_1 = 30;
export const SCANCODE_2 = 31;
export const SCANCODE_3 = 32;
export const SCANCODE_4 = 33;
export const SCANCODE_5 = 34;
export const SCANCODE_6 = 35;
export const SCANCODE_7 = 36;
export const SCANCODE_8 = 37;
export const SCANCODE_9 = 38;
export const SCANCODE_0 = 39;

export const SCANCODE_RETURN = 40;
export const SCANCODE_ESCAPE = 41;
export const SCANCODE_BACKSPACE = 42;
export const SCANCODE_TAB = 43;
export const SCANCODE_SPACE = 44;

export const SCANCODE_MINUS = 45;
export const SCANCODE_EQUALS = 46;
export const SCANCODE_LEFTBRACKET = 47;
export const SCANCODE_RIGHTBRACKET = 48;
export const SCANCODE_BACKSLASH = 49;
export const SCANCODE_NONUSHASH = 50;
export const SCANCODE_SEMICOLON = 51;
export const SCANCODE_APOSTROPHE = 52;
export const SCANCODE_GRAVE = 53;
export const SCANCODE_COMMA = 54;
export const SCANCODE_PERIOD = 55;
export const SCANCODE_SLASH = 56;

export const SCANCODE_CAPSLOCK = 57;

export const SCANCODE_F1 = 58;
export const SCANCODE_F2 = 59;
export const SCANCODE_F3 = 60;
export const SCANCODE_F4 = 61;
export const SCANCODE_F5 = 62;
export const SCANCODE_F6 = 63;
export const SCANCODE_F7 = 64;
export const SCANCODE_F8 = 65;
export const SCANCODE_F9 = 66;
export const SCANCODE_F10 = 67;
export const SCANCODE_F11 = 68;
export const SCANCODE_F12 = 69;

export const SCANCODE_PRINTSCREEN = 70;
export const SCANCODE_SCROLLLOCK = 71;
export const SCANCODE_PAUSE = 72;
export const SCANCODE_INSERT = 73;
export const SCANCODE_HOME = 74;
export const SCANCODE_PAGEUP = 75;
export const SCANCODE_DELETE = 76;
export const SCANCODE_END = 77;
export const SCANCODE_PAGEDOWN = 78;
export const SCANCODE_RIGHT = 79;
export const SCANCODE_LEFT = 80;
export const SCANCODE_DOWN = 81;
export const SCANCODE_UP = 82;

export const SCANCODE_NUMLOCKCLEAR = 83;
export const SCANCODE_KP_DIVIDE = 84;
export const SCANCODE_KP_MULTIPLY = 85;
export const SCANCODE_KP_MINUS = 86;
export const SCANCODE_KP_PLUS = 87;
export const SCANCODE_KP_ENTER = 88;
export const SCANCODE_KP_1 = 89;
export const SCANCODE_KP_2 = 90;
export const SCANCODE_KP_3 = 91;
export const SCANCODE_KP_4 = 92;
export const SCANCODE_KP_5 = 93;
export const SCANCODE_KP_6 = 94;
export const SCANCODE_KP_7 = 95;
export const SCANCODE_KP_8 = 96;
export const SCANCODE_KP_9 = 97;
export const SCANCODE_KP_0 = 98;
export const SCANCODE_KP_PERIOD = 99;

export const SCANCODE_NONUSBACKSLASH = 100;
export const SCANCODE_APPLICATION = 101;
export const SCANCODE_POWER = 102;
export const SCANCODE_KP_EQUALS = 103;
export const SCANCODE_F13 = 104;
export const SCANCODE_F14 = 105;
export const SCANCODE_F15 = 106;
export const SCANCODE_F16 = 107;
export const SCANCODE_F17 = 108;
export const SCANCODE_F18 = 109;
export const SCANCODE_F19 = 110;
export const SCANCODE_F20 = 111;
export const SCANCODE_F21 = 112;
export const SCANCODE_F22 = 113;
export const SCANCODE_F23 = 114;
export const SCANCODE_F24 = 115;
export const SCANCODE_EXECUTE = 116;
export const SCANCODE_HELP = 117;
export const SCANCODE_MENU = 118;
export const SCANCODE_SELECT = 119;
export const SCANCODE_STOP = 120;
export const SCANCODE_AGAIN = 121; /**< redo */
export const SCANCODE_UNDO = 122;
export const SCANCODE_CUT = 123;
export const SCANCODE_COPY = 124;
export const SCANCODE_PASTE = 125;
export const SCANCODE_FIND = 126;
export const SCANCODE_MUTE = 127;
export const SCANCODE_VOLUMEUP = 128;
export const SCANCODE_VOLUMEDOWN = 129;
// not sure whether there's a reason to enable these
// export const SCANCODE_LOCKINGCAPSLOCK = 130;
// export const SCANCODE_LOCKINGNUMLOCK = 131;
// export const SCANCODE_LOCKINGSCROLLLOCK = 132;
export const SCANCODE_KP_COMMA = 133;
export const SCANCODE_KP_EQUALSAS400 = 134;

export const SCANCODE_INTERNATIONAL1 = 135;
export const SCANCODE_INTERNATIONAL2 = 136;
export const SCANCODE_INTERNATIONAL3 = 137;
export const SCANCODE_INTERNATIONAL4 = 138;
export const SCANCODE_INTERNATIONAL5 = 139;
export const SCANCODE_INTERNATIONAL6 = 140;
export const SCANCODE_INTERNATIONAL7 = 141;
export const SCANCODE_INTERNATIONAL8 = 142;
export const SCANCODE_INTERNATIONAL9 = 143;
export const SCANCODE_LANG1 = 144;
export const SCANCODE_LANG2 = 145;
export const SCANCODE_LANG3 = 146;
export const SCANCODE_LANG4 = 147;
export const SCANCODE_LANG5 = 148;
export const SCANCODE_LANG6 = 149;
export const SCANCODE_LANG7 = 150;
export const SCANCODE_LANG8 = 151;
export const SCANCODE_LANG9 = 152;

export const SCANCODE_ALTERASE = 153;
export const SCANCODE_SYSREQ = 154;
export const SCANCODE_CANCEL = 155;
export const SCANCODE_CLEAR = 156;
export const SCANCODE_PRIOR = 157;
export const SCANCODE_RETURN2 = 158;
export const SCANCODE_SEPARATOR = 159;
export const SCANCODE_OUT = 160;
export const SCANCODE_OPER = 161;
export const SCANCODE_CLEARAGAIN = 162;
export const SCANCODE_CRSEL = 163;
export const SCANCODE_EXSEL = 164;

export const SCANCODE_KP_00 = 176;
export const SCANCODE_KP_000 = 177;
export const SCANCODE_THOUSANDSSEPARATOR = 178;
export const SCANCODE_DECIMALSEPARATOR = 179;
export const SCANCODE_CURRENCYUNIT = 180;
export const SCANCODE_CURRENCYSUBUNIT = 181;
export const SCANCODE_KP_LEFTPAREN = 182;
export const SCANCODE_KP_RIGHTPAREN = 183;
export const SCANCODE_KP_LEFTBRACE = 184;
export const SCANCODE_KP_RIGHTBRACE = 185;
export const SCANCODE_KP_TAB = 186;
export const SCANCODE_KP_BACKSPACE = 187;
export const SCANCODE_KP_A = 188;
export const SCANCODE_KP_B = 189;
export const SCANCODE_KP_C = 190;
export const SCANCODE_KP_D = 191;
export const SCANCODE_KP_E = 192;
export const SCANCODE_KP_F = 193;
export const SCANCODE_KP_XOR = 194;
export const SCANCODE_KP_POWER = 195;
export const SCANCODE_KP_PERCENT = 196;
export const SCANCODE_KP_LESS = 197;
export const SCANCODE_KP_GREATER = 198;
export const SCANCODE_KP_AMPERSAND = 199;
export const SCANCODE_KP_DBLAMPERSAND = 200;
export const SCANCODE_KP_VERTICALBAR = 201;
export const SCANCODE_KP_DBLVERTICALBAR = 202;
export const SCANCODE_KP_COLON = 203;
export const SCANCODE_KP_HASH = 204;
export const SCANCODE_KP_SPACE = 205;
export const SCANCODE_KP_AT = 206;
export const SCANCODE_KP_EXCLAM = 207;
export const SCANCODE_KP_MEMSTORE = 208;
export const SCANCODE_KP_MEMRECALL = 209;
export const SCANCODE_KP_MEMCLEAR = 210;
export const SCANCODE_KP_MEMADD = 211;
export const SCANCODE_KP_MEMSUBTRACT = 212;
export const SCANCODE_KP_MEMMULTIPLY = 213;
export const SCANCODE_KP_MEMDIVIDE = 214;
export const SCANCODE_KP_PLUSMINUS = 215;
export const SCANCODE_KP_CLEAR = 216;
export const SCANCODE_KP_CLEARENTRY = 217;
export const SCANCODE_KP_BINARY = 218;
export const SCANCODE_KP_OCTAL = 219;
export const SCANCODE_KP_DECIMAL = 220;
export const SCANCODE_KP_HEXADECIMAL = 221;

export const SCANCODE_LCTRL = 224;
export const SCANCODE_LSHIFT = 225;
export const SCANCODE_LALT = 226;
export const SCANCODE_LGUI = 227;
export const SCANCODE_RCTRL = 228;
export const SCANCODE_RSHIFT = 229;
export const SCANCODE_RALT = 230;
export const SCANCODE_RGUI = 231;

export const SCANCODE_MODE = 257;

export const SCANCODE_AUDIONEXT = 258;
export const SCANCODE_AUDIOPREV = 259;
export const SCANCODE_AUDIOSTOP = 260;
export const SCANCODE_AUDIOPLAY = 261;
export const SCANCODE_AUDIOMUTE = 262;
export const SCANCODE_MEDIASELECT = 263;
export const SCANCODE_WWW = 264;
export const SCANCODE_MAIL = 265;
export const SCANCODE_CALCULATOR = 266;
export const SCANCODE_COMPUTER = 267;
export const SCANCODE_AC_SEARCH = 268;
export const SCANCODE_AC_HOME = 269;
export const SCANCODE_AC_BACK = 270;
export const SCANCODE_AC_FORWARD = 271;
export const SCANCODE_AC_STOP = 272;
export const SCANCODE_AC_REFRESH = 273;
export const SCANCODE_AC_BOOKMARKS = 274;

export const SCANCODE_BRIGHTNESSDOWN = 275;
export const SCANCODE_BRIGHTNESSUP = 276;
export const SCANCODE_DISPLAYSWITCH = 277;
export const SCANCODE_KBDILLUMTOGGLE = 278;
export const SCANCODE_KBDILLUMDOWN = 279;
export const SCANCODE_KBDILLUMUP = 280;
export const SCANCODE_EJECT = 281;
export const SCANCODE_SLEEP = 282;

export const SCANCODE_APP1 = 283;
export const SCANCODE_APP2 = 284;

export const SCANCODE_AUDIOREWIND = 285;
export const SCANCODE_AUDIOFASTFORWARD = 286;
