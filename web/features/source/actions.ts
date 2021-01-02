import { declareAction } from '@reatom/core';

import { ISource } from '../../../types/source';

export const LoadSourceList = declareAction();

export const SetSourceList = declareAction<ISource[]>();
