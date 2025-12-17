export function isSnakeCase(name: string) {
  return /^[a-z]{1,}[a-z_]{1,}$/.test(name);
}

export function isScreamingSnakeCase(name: string) {
  return /^[A-Z][A-Z_]{1,}$/.test(name);
}
