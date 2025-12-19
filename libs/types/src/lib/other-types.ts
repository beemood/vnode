/* eslint-disable @typescript-eslint/no-explicit-any */
export type Some<T> = T | undefined | null;
export type KeyOf<T> = keyof T;
export type Keys<T> = KeyOf<T>[];
export type Any = any;
