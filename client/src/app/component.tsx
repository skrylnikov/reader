import { Feed } from '../feed';

import { Wrapper, Header, Menu, Main, Other, Footer } from './style';

export const App = () => {
  return (
    <Wrapper>
      <Header>Header</Header>
      <Menu>Menu</Menu>
      <Main><Feed/></Main>
      <Other></Other>
      <Footer>Footer</Footer>
    </Wrapper>
  );
}
