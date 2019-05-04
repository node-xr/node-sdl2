const SDL = require('../lib/index');

describe('sdl', () => {
  it('imports successfully', () => {
    expect(SDL).toBeDefined();
  });

  it('includes SDL.INIT_* flags', () => {
    expect(SDL.INIT_EVERYTHING).toEqual(0x0000f231);
  });

  it('can initialize and quit', () => {
    expect(SDL.Init).toBeDefined();
    expect(SDL.Quit).toBeDefined();

    expect(SDL.Init(SDL.INIT_VIDEO | SDL.INIT_AUDIO)).toEqual(0);
    SDL.Quit();
  });
});
