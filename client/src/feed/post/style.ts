import { styled } from "solid-styled-components";

export const Wrapper = styled('div')`
  border-bottom: 2px solid ${(props) => props.theme.colors.pageBg};
  padding: 1em;
`;