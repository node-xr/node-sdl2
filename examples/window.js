const SDL = require('../index');

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const main = async () => {
  SDL.Init(SDL.INIT_VIDEO);
  const window = SDL.CreateWindow(
    'Test',
    SDL.WINDOWPOS_CENTERED,
    SDL.WINDOWPOS_CENTERED,
    640,
    480,
    SDL.WINDOW_SHOWN
  );

  await sleep(5000);

  SDL.DestroyWindow(window);
  SDL.Quit();
};

main();
