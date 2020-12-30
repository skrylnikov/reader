import { IFindSourceByName } from './find-source.port';
import { ISource } from './source.entity';
import { Source } from './source.model';

export const findSourceByNameService: IFindSourceByName = async(name: string): Promise<ISource | null> => {
  try {
    const source = await Source.findOne({where: {name}});
    
    if(!source){
      return null;
    }

    return source.get();
  } catch (e) {
    console.error(e);
    return null;
  }
};
