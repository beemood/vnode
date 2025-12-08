export class UndefinedError extends Error {
  readonly code = UndefinedError.name;
  constructor(message = '') {
    super(`${UndefinedError.name}: ${message}`);
    this.name = UndefinedError.name;
  }
}
