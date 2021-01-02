import { ICreatePort } from './create.port';
import { Source } from './source.model';

export const createService: ICreatePort = async(source): Promise<void> => {
  try {
    await Source.create(source);
  } catch (error) {
    console.error(error);
  }
};
