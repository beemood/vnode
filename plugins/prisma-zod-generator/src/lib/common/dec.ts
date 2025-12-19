/**
 * Declare a constant by name and value
 *
 * @param name variable name
 * @param value variable value
 * @returns constant decleration
 */
export function dec(name: string, value: string) {
  return `export const ${name} = ()=> ${value}`;
}
