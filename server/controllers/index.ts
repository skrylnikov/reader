import { App } from '@tinyhttp/app';

import { sourceListController } from './source-list';

export const rootController = new App();

rootController.use('/source-list', sourceListController);
