import bindings from 'bindings';
import * as constants from './constants';
import { SDL } from './types';

// Import the native binding and augment with constants.
const sdl = bindings('sdl2');
Object.assign(sdl, constants);

// Export the correctly typed binding.
export default sdl as typeof constants & SDL;
