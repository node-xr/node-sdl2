const sdl = require('../index');

describe('sdl syswm', () => {
  const { SDL_INIT_VIDEO, SDL_Init, SDL_Quit } = sdl;
  const { SDL_WINDOW_SHOWN, SDL_CreateWindow, SDL_DestroyWindow } = sdl;
  let window;

  beforeAll(() => {
    SDL_Init(SDL_INIT_VIDEO);
    window = SDL_CreateWindow('Test', 0, 0, 640, 480, SDL_WINDOW_SHOWN);
  });

  afterAll(() => {
    SDL_DestroyWindow(window);
    SDL_Quit();
  });

  it('includes SDL_SYSWM_TYPE', () => {
    const { SDL_SYSWM_WINDOWS, SDL_SYSWM_X11, SDL_SYSWM_COCOA } = sdl;

    expect(SDL_SYSWM_WINDOWS).toEqual(1);
    expect(SDL_SYSWM_X11).toEqual(2);
    expect(SDL_SYSWM_COCOA).toEqual(4);
  });

  it('can get the properties of a window', () => {
    const { SDL_SYSWM_WINDOWS, SDL_SYSWM_X11, SDL_SYSWM_COCOA } = sdl;
    const { SDL_GetWindowWMInfo } = sdl;

    const info = SDL_GetWindowWMInfo(window);

    expect(info.version).toMatch('2.0.9');
    expect(info.subsystem).toBeDefined();

    // Windows
    if (info.subsystem == SDL_SYSWM_WINDOWS) {
      expect(info.window).toBeDefined();
      expect(info.hdc).toBeDefined();
      expect(info.hinstance).toBeDefined();
    }

    // Linux
    else if (info.subsystem == SDL_SYSWM_X11) {
      expect(info.display).toBeDefined();
      expect(info.window).toBeDefined();
    }

    // OSX
    else if (info.subsystem == SDL_SYSWM_COCOA) {
      expect(info.window).toBeDefined();
    }

    // Unsupported window system
    else {
      fail();
    }
  });
});
