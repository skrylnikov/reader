import { styled } from '@linaria/react';

export const Theme = styled.div`
  --header-height: 2.5em;
  --footer-height: 2em;
  --min-content-height: 20em;
  --min-content-width: 20em;

  --page-background: rgb(245, 248, 250);
  --main-background: rgb(255, 255, 255);

`;

export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-areas: ". header header header ."
                       ". menu main other ."
                       ". menu main footer .";
  gap: 2px;
  grid-template-rows: var(--header-height) minmax(var(--min-content-height), auto) var(--footer-height);
  grid-template-columns: 1fr minmax(10em, 1fr) minmax(var(--min-content-width), 4fr) minmax(10em, 1fr) 1fr;
  background-color: var(--main-background);
`;

export const Header = styled.header`
  grid-area: header;
  background-color: var(--page-background);
`;

export const Menu = styled.menu`
  grid-area: menu;
  background-color: var(--page-background);
  margin: 0;
`;

export const Main = styled.main`
  grid-area: main;
  background-color: var(--page-background);
`;

export const Other = styled.div`
  grid-area: other;
  background-color: var(--page-background);
`;

export const Footer = styled.footer`
  grid-area: footer;
  background-color: var(--page-background);
`;
