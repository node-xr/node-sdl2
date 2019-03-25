const sdl = require('../index');

describe('sdl', () => {
  it('imports successfully', () => {
    expect(sdl).toBeDefined();
  });

  it('includes SDL_INIT_* flags', () => {
    const { SDL_INIT_EVERYTHING } = sdl;
    expect(SDL_INIT_EVERYTHING).toEqual(0x0000f231);
  });

  it('can initialize and quit', () => {
    const { SDL_INIT_AUDIO, SDL_INIT_VIDEO, SDL_Init, SDL_Quit } = sdl;

    expect(SDL_Init).toBeDefined();
    expect(SDL_Quit).toBeDefined();

    expect(SDL_Init(SDL_INIT_VIDEO | SDL_INIT_AUDIO)).toEqual(0);
    SDL_Quit();
  });
});
