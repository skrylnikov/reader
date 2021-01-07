import { declareAction } from '@reatom/core';

import { getSourceList } from '../../api';
import { setValue } from '../../shared/local-storage';

import { store } from '../store';

import { LoadSourceList, SetSourceList } from './actions';
import { SubscribedSourceSetAtom } from './atoms';

export const loadSourceListService = declareAction(async (_, {dispatch}) => {
  const sourceList = await getSourceList();
  
  dispatch(SetSourceList(sourceList));
});

store.subscribe(LoadSourceList, ()=> store.dispatch(loadSourceListService()));

store.subscribe(SubscribedSourceSetAtom, (state)=> setValue('SubscribedSourceSet', [...state]));
