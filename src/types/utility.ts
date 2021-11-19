export type OneOrMore<T> = T | T[];

export type PartialReadonly<T> = Partial<Readonly<T>>;

export type Equals<T, U> = T extends U ? (U extends T ? true : false) : false;

export type Is<T extends string> = `is-${T}`;
