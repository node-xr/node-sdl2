export interface BaseSysWMinfo {
  version: string;
  subsystem: number;
}

export interface WinSysWMinfo extends BaseSysWMinfo {
  subsystem: 1;
  window: any;
  hdc: any;
  hinstance: any;
}

export interface X11SysWMinfo extends BaseSysWMinfo {
  subsystem: 2;
  display: any;
  window: any;
}

export interface CocoaSysWMinfo extends BaseSysWMinfo {
  subsystem: 4;
  window: any;
}

export type SysWMinfo = WinSysWMinfo | X11SysWMinfo | CocoaSysWMinfo;

export default interface SysWM {
  GetWindowWMInfo(window: any): SysWMinfo;
}
