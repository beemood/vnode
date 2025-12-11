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

export class NotMatchedError extends Error {
  readonly code = NotMatchedError.name;
  constructor(message = '') {
    super(`${NotMatchedError.name}: ${message}`);
    this.name = NotMatchedError.name;
  }
}

export class NotImplementedError extends Error {
  readonly code = NotImplementedError.name;
  constructor(message = '') {
    super(`${NotImplementedError.name}: ${message}`);
    this.name = NotImplementedError.name;
  }
}

export class NotSupporedError extends Error {
  readonly code = NotSupporedError.name;
  constructor(message = '') {
    super(`${NotSupporedError.name}: ${message}`);
    this.name = NotSupporedError.name;
  }
}
