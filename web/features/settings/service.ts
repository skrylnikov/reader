import { declareAction } from '@reatom/core';

import { store } from '../store';
import { openSettings } from './actions';

export const loadSourceList = declareAction(() => {
  console.log('async action...');
  
});

store.subscribe(openSettings, ()=> store.dispatch(loadSourceList()));
