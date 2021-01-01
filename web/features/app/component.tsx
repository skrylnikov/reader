import React from 'react';

import { Feed } from '../feed';

import { Theme, Wrapper, Header, Menu, Main, Other, Footer } from './style';

export const App = () => {
  return (
    <Theme>
      <Wrapper>
        <Header>Header</Header>
        <Menu>Menu</Menu>
        <Main><Feed /></Main>
        <Other></Other>
        <Footer>Footer</Footer>
      </Wrapper>
    </Theme>
  );
}