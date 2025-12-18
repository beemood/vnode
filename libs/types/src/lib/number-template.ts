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
