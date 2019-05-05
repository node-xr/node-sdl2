export interface BaseEvent {
  type: number;
  timestamp: number;
}

export interface DisplayEvent extends BaseEvent {
  type: 0x150;
  display: number;
  event: number;
  data1: number;
}

export interface WindowEvent extends BaseEvent {
  type: 0x200;
  windowID: number;
  event: number;
  data1: number;
  data2: number;
}

export interface KeyEvent extends BaseEvent {
  type: 0x300 | 0x301;
  windowID: number;
  state: number;
  repeat: number;
  keysym: {
    scancode: number;
    sym: number;
    mod: number;
  };
}

export interface TextEditingEvent extends BaseEvent {
  type: 0x302;
  windowID: number;
  text: string;
  start: number;
  length: number;
}

export interface TextInputEvent extends BaseEvent {
  type: 0x303;
  windowID: number;
  text: string;
}

export interface MouseMotionEvent extends BaseEvent {
  type: 0x400;
  windowID: number;
  which: number;
  state: number;
  x: number;
  y: number;
  xrel: number;
  yrel: number;
}

export interface MouseButtonEvent extends BaseEvent {
  type: 0x401 | 0x402;
  windowID: number;
  which: number;
  button: number;
  state: number;
  clicks: number;
  x: number;
  y: number;
}

export interface MouseWheelEvent extends BaseEvent {
  type: 0x403;
  windowID: number;
  which: number;
  x: number;
  y: number;
  direction: number;
}

export interface JoyAxisEvent extends BaseEvent {
  type: 0x600;
  which: number;
  axis: number;
  value: number;
}

export interface JoyBallEvent extends BaseEvent {
  type: 0x601;
  which: number;
  ball: number;
  xrel: number;
  yrel: number;
}

export interface JoyHatEvent extends BaseEvent {
  type: 0x602;
  which: number;
  hat: number;
  value: number;
}

export interface JoyButtonEvent extends BaseEvent {
  type: 0x603 | 0x604;
  which: number;
  button: number;
  state: number;
}

export interface JoyDeviceEvent extends BaseEvent {
  type: 0x605 | 0x606;
  which: number;
}

export interface ControllerAxisEvent extends BaseEvent {
  type: 0x650;
  which: number;
  axis: number;
  value: number;
}

export interface ControllerButtonEvent extends BaseEvent {
  type: 0x651 | 0x652;
  which: number;
  button: number;
  state: number;
}

export interface ControllerDeviceEvent extends BaseEvent {
  type: 0x653 | 0x654 | 0x655;
  which: number;
}

export interface AudioDeviceEvent extends BaseEvent {
  type: 0x1100 | 0x1100;
  which: number;
  iscapture: number;
}

export interface TouchFingerEvent extends BaseEvent {
  type: 0x700 | 0x701 | 0x702;
  touchId: number;
  fingerId: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  pressure: number;
}

export interface MultiGestureEvent extends BaseEvent {
  type: 0x802;
  touchId: number;
  dTheta: number;
  dDist: number;
  x: number;
  y: number;
  numFingers: number;
  padding: number;
}

export interface DollarGestureEvent extends BaseEvent {
  type: 0x800 | 0x801;
  touchId: number;
  gestureId: number;
  numFingers: number;
  error: number;
  x: number;
  y: number;
}

export interface DropEvent extends BaseEvent {
  type: 0x1000 | 0x1001 | 0x1002 | 0x1003;
  windowID: number;
}

export interface SensorEvent extends BaseEvent {
  type: 0x1200;
  which: number;
}

export interface QuitEvent extends BaseEvent {
  type: 0x100;
}

export interface SysWMEvent extends BaseEvent {
  type: 0x201;
  msg: any; // FIXME: external
}

export interface UserEvent extends BaseEvent {
  type: number;
  windowID: number;
  code: number;
  data1: any; // FIXME: external
  data2: any; // FIXME: external
}

export type Event =
  | DisplayEvent
  | WindowEvent
  | KeyEvent
  | TextEditingEvent
  | TextInputEvent
  | MouseMotionEvent
  | MouseButtonEvent
  | MouseWheelEvent
  | JoyAxisEvent
  | JoyHatEvent
  | JoyButtonEvent
  | ControllerAxisEvent
  | ControllerButtonEvent
  | AudioDeviceEvent
  | TouchFingerEvent
  | MultiGestureEvent
  | DollarGestureEvent
  | DropEvent
  | SensorEvent
  | QuitEvent
  | SysWMEvent
  | UserEvent;

export default interface Events {
  PumpEvents(): void;
  HasEvent(type: number): boolean;
  HasEvents(minType: number, maxType: number): boolean;
  FlushEvent(type: number): void;
  FlushEvents(minType: number, maxType: number): void;
  PollEvent(): Event | undefined;
  WaitEvent(): Event | undefined;
  WaitEventTimeout(timeout: number): Event | undefined;
}
