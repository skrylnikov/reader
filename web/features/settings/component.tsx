import React from 'react';
import { useAtom, useAction } from '@reatom/react';

import { closeSettings } from './actions';
import { settingsAtom } from './atoms';
import { Wrapper, Header, Close } from './style';

export const Settings = () => {
  const { open } = useAtom(settingsAtom);
  const close = useAction(closeSettings);

  if (!open) {
    return null;
  }

  return (
    <Wrapper>
      <Header>
        <h3>Settings</h3>
        <Close onClick={close}>Close</Close>
      </Header>
      
    </Wrapper>
  );
}