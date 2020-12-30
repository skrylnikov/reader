import { di } from '../di';

import { ILoadInitSourceListPort } from './load-init-source-list.port';
import { ISource } from './source.entity';

export const loadInitSourceListService: ILoadInitSourceListPort = async () => {
  const readJson = di.get('fs').get('readJson');

  const initSourceList = await readJson<Array<Omit<ISource, 'id'>>>('./data/source-list.json');

  const findSourceByName = di.get('source').get('findSourceByName');
  const createSource = di.get('source').get('create');

  await Promise.all(initSourceList.map(async (initSource) => {
    const source = await findSourceByName(initSource.name);
    if(!source){
      return createSource(initSource);
    }
  }));

}
