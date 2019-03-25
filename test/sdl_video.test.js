const sdl = require('../index');

describe('sdl video', () => {
  const { SDL_INIT_VIDEO, SDL_Init, SDL_Quit } = sdl;

  beforeAll(() => {
    SDL_Init(SDL_INIT_VIDEO);
  });

  afterAll(() => {
    SDL_Quit();
  });

  it('includes SDL_WindowFlags', () => {
    const { SDL_WINDOW_SHOWN } = sdl;
    expect(SDL_WINDOW_SHOWN).toEqual(0x00000004);
  });

  it('can create and destroy a window', () => {
    const { SDL_WINDOW_SHOWN, SDL_CreateWindow, SDL_DestroyWindow } = sdl;

    expect(SDL_CreateWindow).toBeDefined();
    expect(SDL_DestroyWindow).toBeDefined();

    const window = SDL_CreateWindow('Test', 0, 0, 640, 480, SDL_WINDOW_SHOWN);
    expect(window).toBeTruthy();

    SDL_DestroyWindow(window);
  });
});
