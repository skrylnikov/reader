import { App } from '@tinyhttp/app';

import { di } from '../domain';

export const sourceListController = new App();

sourceListController.get(async (req, res) => {
  const sourceList = await di.get('source').get('findAll')();

  // Pause for testing ui
  await new Promise<void>((resolve) => setTimeout(resolve, 1000));

  res.send(sourceList);
});
