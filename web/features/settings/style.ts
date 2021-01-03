import { styled } from '@linaria/react';

export const Wrapper = styled.div`
  position: absolute;
  width: 30em;
  height: 20em;
  top: calc(50vh - 10em);
  left: calc(50vw - 15em);
  background: var(--main-background);
  border: 1px solid gray;
  border-radius: 2px;
  padding: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
  }
`;

export const Close = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 18px;
`;
