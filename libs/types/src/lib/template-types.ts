export type Binary = 1 | 0;
export type Base3 = Binary | 2;
export type Base4 = Base3 | 3;
export type Base5 = Base4 | 4;
export type Base6 = Base5 | 5;
export type Base7 = Base6 | 6;
export type Base8 = Base7 | 7;
export type Base9 = Base8 | 8;
export type NonZeroDigit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type Digit = NonZeroDigit | 0;
export type Rate = 1 | 2 | 3 | 4 | 5;
export type OptionalDigit = Digit | '';
export type Percent = `${NonZeroDigit}${OptionalDigit}` | '100' | '0';
export type Fraction = `0.${Digit}${Digit}${Digit}${Digit}`;
export type Version = `${number}.${number}.${number}`;
export type Slug = `${Lowercase<string>}` | '';
export type Message = `${Uppercase<string>}${string}.` | '';
export type ErrorMessage =
  | `${Uppercase<string>}${string}Error: ${Message}`
  | '';

export function errorMessage(message: ErrorMessage) {
  return message;
}
export type ErrorClassName = `${Uppercase<string>}${string}Error`;
export type AtSymol = '@';
export type CopyRight = '©';
export type DecoratorDefinition = `@${Uppercase<string>}${string}(${string})`;
export type PackageName = Lowercase<string>;
export type VnodePackageName = `@vnode/${Lowercase<string>}`;
export type CommitType =
  | 'feat'
  | 'fix'
  | 'docs'
  | 'style'
  | 'refactor'
  | 'perf'
  | 'test'
  | 'dev'
  | 'pub';

export type CommingClosing = `${'fix' | 'close'} #${number}`;

export type IssueIndex = `#${number}`;

export type CommitTypeWithIssueIndex = `${CommitType} ${IssueIndex}`;

export type CommitMessage = `${
  | CommitType
  | CommitTypeWithIssueIndex}: ${Message}`;
