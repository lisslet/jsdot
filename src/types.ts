import {Dot} from './core/dot';

export type Setter<Self> = () => Self;


export type PropSetter<Self> = (p: string, v: string | number) => Self;
export type PropGetter = (p: string) => Value;

export type Value = string | number;

export type NumSetter<Self> = (a: number) => Self;
export type Setters<Self> = Setter<Self> | NumSetter<Self> | PropSetter<Self>;

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

export type DotGetter = () => Dot;

export type eventSetter<Self> = (type: string, method: Function) => Self;