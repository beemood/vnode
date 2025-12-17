export function isPascalCase(name: string) {
  return /^[A-Z]{1,}[a-z]{1,}[a-zA-Z]{0,}$/.test(name);
}
