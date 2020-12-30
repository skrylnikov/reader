import { IFindAllPort } from './find-all.port';
import { ISource } from './source.entity';
import { Source } from './source.model';

export const findAllService: IFindAllPort = async(): Promise<ISource[]> => {
  try {
    const sourceList = await Source.findAll();

    return sourceList.map((x) => x.get());
  } catch (e) {
    console.error(e);
    return [];
  }
};
