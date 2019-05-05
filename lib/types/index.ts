import Events from './events';
import Quit from './quit';
import Core from './sdl';
import SysWM from './syswm';
import Video from './video';

export type SDL = Events & Quit & Core & SysWM & Video;
