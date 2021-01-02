import { declareAction } from '@reatom/core';

import { getSourceList } from '../../api';

import { store } from '../store';

import { LoadSourceList, SetSourceList } from './actions';

export const loadSourceListService = declareAction(async (_, {dispatch}) => {
  const sourceList = await getSourceList();
  
  dispatch(SetSourceList(sourceList));
});

store.subscribe(LoadSourceList, ()=> store.dispatch(loadSourceListService()));
