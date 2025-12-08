export class UndefinedError extends Error {
  readonly code = UndefinedError.name;
  constructor(message = '') {
    super(`${UndefinedError.name}: ${message}`);
    this.name = UndefinedError.name;
  }
}

export class NotStringError extends Error {
  readonly code = NotStringError.name;
  constructor(message = '') {
    super(`${NotStringError.name}: ${message}`);
    this.name = NotStringError.name;
  }
}
