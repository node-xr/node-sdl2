const SDL = require('../lib/index');

describe('sdl video', () => {
  beforeAll(() => {
    SDL.Init(SDL.INIT_VIDEO);
  });

  afterAll(() => {
    SDL.Quit();
  });

  it('includes SDL.WindowFlags', () => {
    expect(SDL.WINDOW_SHOWN).toEqual(0x00000004);
    expect(SDL.WINDOWPOS_UNDEFINED_MASK).toEqual(0x1fff0000);
    expect(SDL.WINDOWPOS_CENTERED_MASK).toEqual(0x2fff0000);
  });

  it('can create and destroy a window', () => {
    expect(SDL.CreateWindow).toBeDefined();
    expect(SDL.DestroyWindow).toBeDefined();

    const window = SDL.CreateWindow('Test', 0, 0, 640, 480, SDL.WINDOW_SHOWN);
    expect(window).toBeTruthy();

    SDL.DestroyWindow(window);
  });
});
