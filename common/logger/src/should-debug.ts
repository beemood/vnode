export function shouldDebug(context: string) {
  return (
    process.env.DEBUG &&
    (process.env.DEBUG.includes('*') ||
      process.env.DEBUG.toLowerCase().includes(context.toLowerCase()))
  );
}
