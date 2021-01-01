import React from 'react';
import { useAction } from '@reatom/react';

import { openSettings } from '../settings';

import { Wrapper, Item } from './style';

export const Menu = () => {
  const openSettingsHandler = useAction(openSettings);


  return (
    <Wrapper>
      <Item>Feed</Item>
      <Item onClick={openSettingsHandler}>Setting</Item>
    </Wrapper>
  );
};
