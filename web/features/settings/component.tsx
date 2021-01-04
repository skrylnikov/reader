import React from 'react';
import { useAtom, useAction } from '@reatom/react';
import { option } from 'fp-ts';

import { SourceListAtom, SubscribedSourceSetAtom } from '../source';

import { Source } from './source';
import { CloseSettings } from './actions';
import { SettingsAtom } from './atoms';
import { Wrapper, Header, Close } from './style';

export const Settings = (): JSX.Element | null => {
  const { open } = useAtom(SettingsAtom);
  const sourceList = useAtom(SourceListAtom);
  const subscribedSourceSet = useAtom(SubscribedSourceSetAtom);
  const close = useAction(CloseSettings);

  if (!open) {
    return null;
  }

  return (
    <Wrapper>
      <Header>
        <h3>Settings</h3>
        <Close onClick={close}>X</Close>
      </Header>
      {option.isSome(sourceList) 
        ? sourceList.value.map((x) => (
        <Source
          key={x.id}
          id={x.id}
          name={x.name}
          logo={x.logo}
          subscribed={subscribedSourceSet.has(x.id)}
        />
        ))
        : (<p>Loading...</p>)}
    </Wrapper>
  );
}