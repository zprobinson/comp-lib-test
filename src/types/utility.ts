export type OneOrMore<T> = T | T[];

export type PartialReadonly<T> = Partial<Readonly<T>>;

export type Equals<T, U> = T extends U ? (U extends T ? true : false) : false;

export type Is<TemplateLiteral extends string> = `is-${TemplateLiteral}`;
export type Has<TemplateLiteral extends string> = `has-${TemplateLiteral}`;
