import { declareAtom } from '@reatom/core';
import { option } from 'fp-ts';
import { produce } from 'immer';

import { ISource } from '../../../types/source';

import {
  LoadSourceList,
  SetSourceList,
  SuscribeToSource,
  UnsubribeToSource,
} from './actions';

export const SourceListAtom = declareAtom<option.Option<ISource[]>>(option.none, (on) =>[
  on(LoadSourceList, () => option.none),
  on(SetSourceList, (_, payload) => option.some(payload)),
]);

export const SubscribedSourceSetAtom = declareAtom<Set<number>>(new Set(), (on) => [
  on(SuscribeToSource, (state, id) => produce(state, (draft) => {
    draft.add(id);
  })),
  on(UnsubribeToSource, (state, id) => produce(state, (draft) => {
    draft.delete(id);
  })),
]);
