import React from 'react';
import { useAtom, useAction } from '@reatom/react';
import { option } from 'fp-ts';

import { SourceListAtom } from '../source';

import { CloseSettings } from './actions';
import { SettingsAtom } from './atoms';
import { Wrapper, Header, Close } from './style';

export const Settings = () => {
  const { open } = useAtom(SettingsAtom);
  const sourceList = useAtom(SourceListAtom);
  const close = useAction(CloseSettings);

  if (!open) {
    return null;
  }

  return (
    <Wrapper>
      <Header>
        <h3>Settings</h3>
        <Close onClick={close}>Close</Close>
      </Header>
      {option.isNone(sourceList) && (<p>Loading...</p>)}
      {option.isSome(sourceList) && sourceList.value.map((x) => (<p key={x.id}>{x.name}</p>))}
    </Wrapper>
  );
}