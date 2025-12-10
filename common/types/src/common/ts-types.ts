export type TsTypes = {
  string: 'string';
  number: 'number';
  bigint: 'bigint';
  boolean: 'boolean';
  symbol: 'symbol';
  undefined: 'undefined';
  object: 'object';
  function: 'function';
  Date: 'Date';
  JsonValue: 'JsonValue';
};

export type TsType = keyof TsTypes;
