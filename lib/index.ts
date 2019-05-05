import bindings from 'bindings';
import * as constants from './constants';
import { SDL } from './types';

// Import the native binding and augment with constants.
const sdl = bindings('sdl2');
Object.assign(sdl, constants);

// Export the correctly typed binding.
// FIXME: replace this syntax once node supports ES6 imports.
export = sdl as typeof constants & SDL;
