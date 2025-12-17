export function isCamelCase(name: string) {
  return /^[a-z]{1,}[A-Z]{1,}[a-zA-Z]{0,}$/.test(name);
}
