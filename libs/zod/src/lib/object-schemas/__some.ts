/* eslint-disable @typescript-eslint/no-explicit-any */
import z from 'zod';

/**
 * Parse the given json {@link value} or return as it is
 */
export const parseJsonOrReturn = (value: any): string => {
  if (typeof value === 'string') {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }
  return value;
};

/**
 * Coerced integer schema
 */
export const int = z.coerce.number().int();

/**
 * String schema
 */
export const str = z.string();

/**
 * Coerced number/decimal schema
 */
export const num = z.coerce.number();

/**
 * Coerced boolean schema
 */
export const bool = z.coerce.boolean();

/**
 * Date schema
 */
export const date = z.iso.date();

/**
 * Datetime schema
 */
export const datetime = z.iso.datetime();

/**
 * Short string schema ((maximum 255 characters))
 */
export const short = z.string().max(255);

/**
 * Long string schema
 */
export const long = z.string();

/**
 * Coerced id field schema
 */
export const id = z.coerce.number().int().min(1);

/**
 * Coerced id object schema
 */
export const idObj = z.object({
  id: id,
});

/**
 * Coerced currency schema
 */
export const currency = num.min(0);

/**
 * Coerced positive number schema
 */
export const positiveNum = num.int().min(0);

/**
 * Coerced positive integer schema
 */
export const positiveInt = int.min(0);

/**
 * Phone country code schema
 */
export const cc = str.regex(/^\\+[0-9]{1,5}$/);

/**
 * Phone schema
 */
export const phone = str.regex(/^[0-9]{3} [0-9]{3} [0-9]{2}-[0-9]{2}$/, {
  error: 'Invalid phone format',
});

/**
 * Slug schema
 */
export const slug = short.regex(/^[0-9a-z-]{0,}$/, { error: 'Invalid slug' });

/**
 * Description schema
 */
export const uuid = z.uuid();

/**
 * Email schemea
 */
export const email = z.email();

/**
 * Url schema
 */
export const url = z.url();

/**
 * Strong password schema
 */
export const pass = z
  .string()
  .min(6)
  .regex(/[A-Z]{1,}/, { error: 'Uppercase required' })
  .regex(/[a-z]{1,}/, { error: 'Lowercase required' })
  .regex(/[0-9]{1,}/, { error: 'Number requried' })
  .regex(/[~!@#$%^&*()_+{}":'<>?]{1,}/, {
    error: 'Special character required',
  });

/**
 * Order schema to define order direction either "asc" or "desc"
 */
export const dir = z.enum(['asc', 'desc']);

/**
 * Special object schema with _count property to order by relation count
 */
export const orderByCount = z.object({ _count: dir });

/**
 * Pagination schema for **take/limit** option
 */
export const take = positiveNum.clone().default(20);

/**
 * Pagination schema for  **skip/offset** option
 */
export const skip = int.min(0).default(0);

/**
 * Json value schema
 */
export const json = z.preprocess(parseJsonOrReturn, z.any());

/**
 * {@link boolFilter}
 */
export const boolFilter_0 = z.object({
  equals: bool.optional(),
});

/**
 * {@link boolFilter}
 */
export const boolFilter_1 = z.object({
  equals: bool.optional(),
  not: bool.or(boolFilter_0).optional(),
});

/**
 * Filter schema to query boolean value
 */
export const boolFilter = bool.or(boolFilter_1);

/**
 * {@link intFilter}
 */
export const intFilter_0 = z.object({
  equals: int.optional(),
  gt: int.optional(),
  gte: int.optional(),
  lt: int.optional(),
  lte: int.optional(),
  in: int.array().optional(),
  notIn: int.array().optional(),
});

/**
 * {@link intFilter}
 */
export const intFilter_1 = z.object({
  equals: int.optional(),
  gt: int.optional(),
  gte: int.optional(),
  lt: int.optional(),
  lte: int.optional(),
  in: int.array().optional(),
  notIn: int.array().optional(),
  not: intFilter_0.optional(),
});

/**
 * Filter schema to query integer value
 */
export const intFilter = int.or(intFilter_1);

/**
 * {@link numFilter}
 */
export const numFilter_0 = z.object({
  equals: num.optional(),
  gt: num.optional(),
  gte: num.optional(),
  lt: num.optional(),
  lte: num.optional(),
  in: num.array().optional(),
  notIn: num.array().optional(),
});

/**
 * {@link numFilter}
 */
export const numFilter_1 = z.object({
  equals: num.optional(),
  gt: num.optional(),
  gte: num.optional(),
  lt: num.optional(),
  lte: num.optional(),
  in: num.array().optional(),
  notIn: num.array().optional(),
  not: numFilter_0.optional(),
});

/**
 * Connect one relation
 */
export const connectOne = z.object({ connect: idObj });

/**
 * Connect many relation
 */
export const connectMany = z.object({ connect: idObj.array() });

/**
 * Filter schema to query number value
 */
export const numFilter = num.or(numFilter_1);

/**
 * {@link dateFilter}
 */
export const dateFilter_0 = z.object({
  equals: date.optional(),
  gt: date.optional(),
  gte: date.optional(),
  lt: date.optional(),
  lte: date.optional(),
  in: date.array().optional(),
  notIn: date.array().optional(),
});

/**
 * {@link dateFilter}
 */
export const dateFilter_1 = z.object({
  equals: date.optional(),
  gt: date.optional(),
  gte: date.optional(),
  lt: date.optional(),
  lte: date.optional(),
  in: date.array().optional(),
  notIn: date.array().optional(),
  not: dateFilter_0.optional(),
});

/**
 * Filter schema to query date value
 */
export const dateFilter = date.or(dateFilter_1);

/**
 * {@link datetimeFilter}
 */
export const datetimeFilter_0 = z.object({
  equals: datetime.optional(),
  gt: datetime.optional(),
  gte: datetime.optional(),
  lt: datetime.optional(),
  lte: datetime.optional(),
  in: datetime.array().optional(),
  notIn: datetime.array().optional(),
});

/**
 * {@link dateFilter}
 */
export const datetimeFilter_1 = z.object({
  equals: datetime.optional(),
  gt: datetime.optional(),
  gte: datetime.optional(),
  lt: datetime.optional(),
  lte: datetime.optional(),
  in: datetime.array().optional(),
  notIn: datetime.array().optional(),
  not: datetimeFilter_0.optional(),
});

/**
 * Filter schema to query date value
 */
export const datetimeFilter = date.or(datetimeFilter_1);

/**
 * Schema to define string query mode would be 'default' or 'insensitive' mode
 */
export const mode = z.enum(['default', 'insensitive']);

/**
 * {@link strFilter}
 */
export const strFilter_0 = z.object({
  contains: str.optional(),
  endsWith: str.optional(),
  equals: str.optional(),
  gt: str.optional(),
  gte: str.optional(),
  lt: str.optional(),
  lte: str.optional(),
  startsWith: str.optional(),
  in: str.array().optional(),
  notIn: str.array().optional(),
  mode: mode.optional(),
});

/**
 * {@link strFilter}
 */
export const strFilter_1 = z.object({
  contains: str.optional(),
  endsWith: str.optional(),
  equals: str.optional(),
  gt: str.optional(),
  gte: str.optional(),
  lt: str.optional(),
  lte: str.optional(),
  startsWith: str.optional(),
  in: str.array().optional(),
  notIn: str.array().optional(),
  mode: mode.optional(),
  not: str.or(strFilter_0).optional(),
});

/**
 * Filter schema to query string value
 */
export const strFilter = str.or(strFilter_1);

/**
 * Filter schema to query json value
 */
export const jsonFilter_0 = z.object({
  path: str.array().optional(),
  array_contains: str.optional(),
  array_ends_with: str.optional(),
  array_starts_with: str.optional(),
  equals: str.optional(),
  gt: str.optional(),
  gte: str.optional(),
  lt: str.optional(),
  lte: str.optional(),
  mode: mode,
  string_contains: str.optional(),
  string_ends_with: str.optional(),
  string_starts_with: str.optional(),
});

export const jsonFilter_1 = z.object({
  path: str.array().optional(),
  array_contains: str.optional(),
  array_ends_with: str.optional(),
  array_starts_with: str.optional(),
  equals: str.optional(),
  gt: str.optional(),
  gte: str.optional(),
  lt: str.optional(),
  lte: str.optional(),
  mode: mode,
  string_contains: str.optional(),
  string_ends_with: str.optional(),
  string_starts_with: str.optional(),
  not: str.or(jsonFilter_0),
});

export const jsonFilter = jsonFilter_1;

/**
 * Filter schema to query a list of strings
 */
export const strArrayFilter = z.object({
  equals: str.array().optional(),
  has: str.optional(),
  hasEvery: str.array().optional(),
  hasSome: str.array().optional(),
  isEmpty: bool.optional(),
});

/**
 * Filter schema to query a list of numbers
 */
export const numArrayFilter = z.object({
  equals: num.array().optional(),
  has: num.optional(),
  hasEvery: num.array().optional(),
  hasSome: num.array().optional(),
  isEmpty: bool.optional(),
});

/**
 * Filter schema to query a list of integer values
 */
export const intArrayFilter = z.object({
  equals: int.array().optional(),
  has: int.optional(),
  hasEvery: int.array().optional(),
  hasSome: int.array().optional(),
  isEmpty: bool.optional(),
});

/**
 * Fileter scehma to query list of dates
 */
export const dateArrayFilter = z.object({
  equals: date.array().optional(),
  has: date.optional(),
  hasEvery: date.array().optional(),
  hasSome: date.array().optional(),
  isEmpty: bool.optional(),
});

export const page = z.object({
  take: take,
  skip: skip,
});

export type int = z.infer<typeof int>;
export type str = z.infer<typeof str>;
export type num = z.infer<typeof num>;
export type bool = z.infer<typeof bool>;
export type date = z.infer<typeof date>;
export type datetime = z.infer<typeof datetime>;
export type short = z.infer<typeof short>;
export type long = z.infer<typeof long>;
export type id = z.infer<typeof id>;
export type idObj = z.infer<typeof idObj>;
export type currency = z.infer<typeof currency>;
export type positiveNum = z.infer<typeof positiveNum>;
export type positiveInt = z.infer<typeof positiveInt>;
export type cc = z.infer<typeof cc>;
export type phone = z.infer<typeof phone>;
export type slug = z.infer<typeof slug>;
export type uuid = z.infer<typeof uuid>;
export type email = z.infer<typeof email>;
export type url = z.infer<typeof url>;
export type pass = z.infer<typeof pass>;
export type dir = z.infer<typeof dir>;
export type orderByCount = z.infer<typeof orderByCount>;
export type take = z.infer<typeof take>;
export type skip = z.infer<typeof skip>;
export type json = z.infer<typeof json>;
export type boolFilter = z.infer<typeof boolFilter>;
export type intFilter = z.infer<typeof intFilter>;
export type numFilter = z.infer<typeof numFilter>;
export type dateFilter = z.infer<typeof dateFilter>;
export type datetimeFilter = z.infer<typeof datetimeFilter>;
export type mode = z.infer<typeof mode>;
export type strFilter = z.infer<typeof strFilter>;
export type jsonFilter = z.infer<typeof jsonFilter>;
export type strArrayFilter = z.infer<typeof strArrayFilter>;
export type numArrayFilter = z.infer<typeof numArrayFilter>;
export type intArrayFilter = z.infer<typeof intArrayFilter>;
export type dateArrayFilter = z.infer<typeof dateArrayFilter>;
export type page = z.infer<typeof page>;
