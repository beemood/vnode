export type StringRecord<K extends string = string> = Record<K, string>;
export type NumberRecord<K extends string = string> = Record<K, number>;
export type BooleanRecord<K extends string = string> = Record<K, boolean>;
export type BinaryRecord<K extends string = string> = Record<K, 1 | 0>;
export type DateRecord<K extends string = string> = Record<K, Date>;
