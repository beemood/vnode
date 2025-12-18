export type NonEmptyString = `${
  | Uppercase<string>
  | Lowercase<string>}${string}`;

export type Slug = `${Lowercase<string>}` | '';
export type Message = `${Uppercase<string>}${string}.` | '';
export type ErrorMessage =
  | `${Uppercase<string>}${string}Error: ${Message}`
  | '';
export type ErrorClassName = `${Uppercase<string>}${string}Error`;
export type AtSymol = '@';
export type CopyRight = '©';
export type DecoratorDefinition = `@${Uppercase<string>}${string}(${string})`;
export type PackageName = Lowercase<string>;
export type VnodePackageName = `@vnode/${Lowercase<string>}`;
