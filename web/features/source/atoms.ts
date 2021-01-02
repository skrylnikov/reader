import { declareAtom } from '@reatom/core';
import { option } from 'fp-ts';

import { ISource } from '../../../types/source';

import { LoadSourceList, SetSourceList } from './actions';

export const SourceListAtom = declareAtom<option.Option<ISource[]>>(option.none, (on) =>[
  on(LoadSourceList, () => option.none),
  on(SetSourceList, (_, payload) => option.some(payload)),
]);
