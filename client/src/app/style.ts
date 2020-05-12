import { styled } from "solid-styled-components";

export const Wrapper = styled('div')`
  height: 100%;
  display: grid;
  grid-template-areas: ". header header header ."
                       ". menu main other ."
                       ". menu main footer .";
  gap: 2px;
  grid-template-rows: var(--header-height) minmax(var(--min-content-height), auto) var(--footer-height);
  grid-template-columns: 1fr minmax(10em, 1fr) minmax(var(--min-content-width), 4fr) minmax(10em, 1fr) 1fr;
  background-color: ${(props) => props.theme.colors.pageBg};
`;

export const Header = styled('header')`
  grid-area: header;
  background-color: ${(props) => props.theme.colors.mainBg};
`;

export const Menu = styled('menu')`
  grid-area: menu;
  background-color: ${(props) => props.theme.colors.mainBg};
  margin: 0;
`;

export const Main = styled('main')`
  grid-area: main;
  background-color: ${(props) => props.theme.colors.mainBg};
`;

export const Other = styled('div')`
  grid-area: other;
  background-color: ${(props) => props.theme.colors.mainBg};
`;

export const Footer = styled('footer')`
  grid-area: footer;
  background-color: ${(props) => props.theme.colors.mainBg};
`;
