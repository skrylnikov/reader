import { ISource } from './source.entity';

export type IFindSourceByName = (name: string) => Promise<ISource | null>;

export const findSourceByNameSymbol = Symbol();
