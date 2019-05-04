const sdl = require('bindings')('sdl2');
const constants = require('./constants');

// Add constants to exported object.
Object.assign(sdl, constants);

export default sdl;
