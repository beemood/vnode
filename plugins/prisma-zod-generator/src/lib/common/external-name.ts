import type {
  ExternalSchemaName
} from './name-suffixes.js';

/**
 * All internal schemas such as Own schemas will be improted from the internal/internal.ts file as Internal.
 * So we can get internal schemas like `Internal.SchemaName` in the main schemas.
 * @param modelName
 * @param suffix
 * @returns
 */
export function externalName(suffix: ExternalSchemaName) {
  return `External.${suffix}`;
}
