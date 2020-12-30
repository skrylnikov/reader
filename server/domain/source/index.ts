import { Container } from 'nanodi-ts';

export * from './source.entity';

export * from './load-init-source-list.port';
import { ILoadInitSourceListPort } from './load-init-source-list.port';
import { loadInitSourceListService } from './load-init-source-list.service';

export * from './find-source.port';
import { IFindSourceByName as IFindSourceByNamePort } from './find-source.port';
import { findSourceByNameService } from './find-source.service';

import { ICreatePort } from './create.port';
import { createService } from './create.service';

import { IFindAllPort } from './find-all.port';
import { findAllService } from './find-all.service';

export const sourceDi = new Container({
  loadInitSourceList: loadInitSourceListService as ILoadInitSourceListPort,
  findSourceByName: findSourceByNameService as IFindSourceByNamePort,
  create: createService as ICreatePort,
  findAll: findAllService as IFindAllPort,
});
