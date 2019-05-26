export type Setter = () => void;


export type PropSetter = (p: string, v: string | number) => void;
export type PropGetter = (p: string) => Value;

export type Value = string | number;

export type NumSetter = (a: number) => PropSetter;
export type Setters = Setter | NumSetter | PropSetter;

export type NumGetter = () => number;
export type StrGetter = () => string;
export type BoolGetter = () => boolean;

export type PropStrGetter = (p: string) => string;
export type PropNumGetter = (p: string) => number;
export type PropBoolGetter = (p: string) => boolean;

export type StrGetters = StrGetter | PropStrGetter;
export type NumGetters = NumGetter | PropNumGetter;
export type BoolGetters = BoolGetter | PropBoolGetter;

export type Stringage = string | number | boolean;

export type StrsGetter = () => string[];

export type ListGetter = () => DOMTokenList;

export type QueryGetter = (selector: string) => HTMLElement[];