import React from 'react';
import { useAction } from '@reatom/react';

import { OpenSettings } from '../settings';

import { Wrapper, Item } from './style';

export const Menu = () => {
  const openSettings = useAction(OpenSettings);


  return (
    <Wrapper>
      <Item>Feed</Item>
      <Item onClick={openSettings}>Setting</Item>
    </Wrapper>
  );
};
