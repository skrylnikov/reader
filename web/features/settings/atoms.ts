import { declareAtom } from '@reatom/core';
import { produce } from 'immer';

import { openSettings, closeSettings } from './actions';

export const settingsAtom = declareAtom({
  open: false,
}, (on)=>[
  on(openSettings, (state) => produce(state, (draft) => {
    draft.open = true;
  })),
  on(closeSettings, (state) => produce(state, (draft) => {
    draft.open = false;
  })),
])
