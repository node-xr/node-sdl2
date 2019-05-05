export default interface Video {
  CreateWindow(
    title: string,
    x: number,
    y: number,
    w: number,
    h: number,
    flags: number
  ): any;
  DestroyWindow(window: any): void;
}
