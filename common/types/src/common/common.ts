export type Some<T> = T | undefined;
export type Unkown = unknown;
export type Any = any;
export type Nullable<T> = T | undefined | null;
export type ClassType<T> = {
  new (...args: any[]): T;
};
