import SDL from '../lib/index';

describe('sdl syswm', () => {
  let window;

  beforeAll(() => {
    SDL.Init(SDL.INIT_VIDEO);
    window = SDL.CreateWindow('Test', 0, 0, 640, 480, SDL.WINDOW_SHOWN);
  });

  afterAll(() => {
    SDL.DestroyWindow(window);
    SDL.Quit();
  });

  it('includes SDL.SYSWM_TYPE', () => {
    expect(SDL.SYSWM_WINDOWS).toEqual(1);
    expect(SDL.SYSWM_X11).toEqual(2);
    expect(SDL.SYSWM_COCOA).toEqual(4);
  });

  it('can get the properties of a window', () => {
    const info = SDL.GetWindowWMInfo(window);

    expect(info.version).toMatch('2.0.9');
    expect(info.subsystem).toBeDefined();

    // Windows
    if (info.subsystem == SDL.SYSWM_WINDOWS) {
      expect(info.window).toBeDefined();
      expect(info.hdc).toBeDefined();
      expect(info.hinstance).toBeDefined();
    }

    // Linux
    else if (info.subsystem == SDL.SYSWM_X11) {
      expect(info.display).toBeDefined();
      expect(info.window).toBeDefined();
    }

    // OSX
    else if (info.subsystem == SDL.SYSWM_COCOA) {
      expect(info.window).toBeDefined();
    }

    // Unsupported window system
    else {
      fail();
    }
  });
});
