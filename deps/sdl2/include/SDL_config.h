#pragma once
///
/// This is a custom config created for node-sdl2.
///
/// It dispatches the content of the file to the correct SDL_config.h
/// for a specific platform, based on a list of pregenerated platforms.
///
#if defined(__APPLE__)
   #include "./SDL_config_macosx.h"
#elif (defined(linux) || defined(__linux) || defined(__linux__))
   #include "./SDL_config_linux.h"
#elif (defined(WIN32) || defined(_WIN32) || defined(__CYGWIN__) || defined(__MINGW32__)
   #include "./SDL_config_windows.h"
#else
   #error "Unsupported platform detected."
#endif
