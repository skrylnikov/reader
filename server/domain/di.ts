import { Container } from 'nanodi-ts';

import { fsDi } from './fs';
import { sourceDi } from './source';

export const di = new Container({
  fs: fsDi,
  source: sourceDi,
});
