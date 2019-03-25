const sdl = require('../index');

describe('sdl', () => {
  it('imports successfully', () => {
    expect(sdl).toBeDefined();
  });

  it('includes SDL_INIT_* enum', () => {
    expect(sdl.SDL_INIT_EVERYTHING).toEqual(0x0000f231);
  });

  // TODO: add unit tests per function.
});
