const sdl = require('../index');
const { SDL_INIT_VIDEO, SDL_Init, SDL_Quit } = sdl;
const { SDL_WINDOW_SHOWN, SDL_CreateWindow, SDL_DestroyWindow } = sdl;

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const main = async () => {
  SDL_Init(SDL_INIT_VIDEO);
  const window = SDL_CreateWindow('Test', 0, 0, 640, 480, SDL_WINDOW_SHOWN);

  await sleep(5000);

  SDL_DestroyWindow(window);
  SDL_Quit();
};

main();
