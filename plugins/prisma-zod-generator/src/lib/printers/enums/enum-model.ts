import type { EnumModel } from '../../prisma/types.js';

/**
 * Create the enum schema string from enum model
 *
 * @param model {@link EnumModel}
 * @returns schema string
 */
export function enumModel(model: EnumModel) {
  const proeprtiesCode = model.values
    .map((e) => {
      return `'${e.name}'`;
    })
    .join(',');
  return `z.enum([ ${proeprtiesCode} ])`;
}
