import { declareAtom } from '@reatom/core';
import { produce } from 'immer';

import { OpenSettings, CloseSettings } from './actions';

export const SettingsAtom = declareAtom({
  open: false,
}, (on)=>[
  on(OpenSettings, (state) => produce(state, (draft) => {
    draft.open = true;
  })),
  on(CloseSettings, (state) => produce(state, (draft) => {
    draft.open = false;
  })),
])
