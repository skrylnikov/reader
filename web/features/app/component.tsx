import React from 'react';
import { Provider } from '@reatom/react';

import { store } from '../store';

import { Feed } from '../feed';
import { Menu } from '../menu';
import { Settings } from '../settings';

import { Theme, Wrapper, Header, Menu as MenuWrapper, Main, Other, Footer } from './style';

export const App = () => {
  return (
    <Provider value={store}>
    <Theme>
      <Wrapper>
        <Header>Header</Header>
        <MenuWrapper><Menu/></MenuWrapper>
        <Main><Feed /></Main>
        <Other></Other>
        <Footer>Footer</Footer>
      </Wrapper>
      <Settings/>
    </Theme>
    </Provider>
  );
}