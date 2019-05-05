export default interface SDL {
  Init(flags: number): number;
  InitSubsystem(flags: number): number;
  QuitSubsystem(flags: number): void;
  WasInit(flags: number): number;
  Quit(): void;
}
