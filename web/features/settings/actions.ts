import { declareAction } from '@reatom/core';

import { LoadSourceList } from '../source';

export const OpenSettings = declareAction((_, {dispatch})=> dispatch(LoadSourceList()));

export const CloseSettings = declareAction();
