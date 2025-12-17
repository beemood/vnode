/**
 * Uppercase the first letter of the given {@link name}
 * @param name string
 * @returns string
 */
export function upperCaseFirstLetter(name: string) {
  return name[0].toUpperCase() + name.slice(1);
}
