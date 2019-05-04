import bindings from 'bindings';
import * as constants from './constants';

// Add constants to exported object.
const sdl = bindings('sdl2');
Object.assign(sdl, constants);

export default sdl;
