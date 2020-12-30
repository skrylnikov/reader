import { App } from '@tinyhttp/app';

import { httpConfig } from './config';

import { di } from './domain';
import { rootController } from './controllers';

const app = new App();

// app.use((req, res) => {
//   res.send('hello world');
// });

app.use('/api', rootController);

di.get('source').get('loadInitSourceList')();

app.listen(httpConfig.post, () => {
  console.log(`app start http://localhost:${httpConfig.post}`);
});

