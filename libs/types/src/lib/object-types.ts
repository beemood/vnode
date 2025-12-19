import type { Any } from './other-types.js';
import type { PropertyType } from './property-type.js';

export type RecordKey = string | symbol | number;

export type PartialRecord<K extends RecordKey, V> = Partial<Record<K, V>>;

export type StringRecord<K extends RecordKey = string> = Record<K, string>;
export type NumberRecord<K extends RecordKey = string> = Record<K, number>;
export type BooleanRecord<K extends RecordKey = string> = Record<K, boolean>;
export type BinaryRecord<K extends RecordKey = string> = Record<K, 1 | 0>;
export type DateRecord<K extends RecordKey = string> = Record<K, Date>;
export type TypeRecord<K extends RecordKey = string> = Record<K, PropertyType>;
export type TypeRecordWithChildren<K extends RecordKey = string> = Record<
  K,
  PropertyType | TypeRecord
>;
export type ArrayRecord<K extends RecordKey, T> = Record<K, T[]>;
export type ArrayStringRecord<K extends RecordKey = string> = ArrayRecord<
  K,
  string
>;
export type ArrayNumberRecord<K extends RecordKey = string> = ArrayRecord<
  K,
  number
>;
export type ArrayBooleanRecord<K extends RecordKey = string> = ArrayRecord<
  K,
  boolean
>;
export type ArrayBinaryRecord<K extends RecordKey = string> = ArrayRecord<
  K,
  1 | 0
>;
export type ArrayDateRecord<K extends RecordKey = string> = ArrayRecord<
  K,
  Date
>;
export type ArrayTypeRecord<K extends RecordKey = string> = ArrayRecord<
  K,
  PropertyType
>;

export type AnyRecord = Record<RecordKey, Any>;

export type AnyArray = Array<Any>;
