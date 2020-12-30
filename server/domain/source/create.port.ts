import { ISource } from './source.entity';

export type ICreatePort = (source: Omit<ISource, 'id'>) => Promise<void>;
