import z from 'zod';

export function filterSchema(record: Record<string, string>) {
  return z.object({ ...record });
}
