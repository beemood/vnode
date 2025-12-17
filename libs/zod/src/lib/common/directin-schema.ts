import z from 'zod';

export const directionMap = {
  ASC: 'ASC',
  DESC: 'DESC',
  asc: 'asc',
  desc: 'desc',
};

export type Direction = keyof typeof directionMap;

export const DirectionSchema = z.enum(directionMap);

export type DirectionSchemaType = z.infer<typeof DirectionSchema>;
