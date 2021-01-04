import React, { useCallback } from 'react';
import { useAction, useAtom } from '@reatom/react';

import { SuscribeToSource, UnsubribeToSource } from '../../source';

import { Wrapper, Name, Image, Checkbox } from './style';

interface IProps {
  id: number;
  subscribed: boolean;
  name: string;
  logo: string;
}

export const Source = ({ id, name, logo, subscribed }: IProps): JSX.Element => {
  const suscribeToSource = useAction(SuscribeToSource);
  const unsubribeToSource = useAction(UnsubribeToSource);

  const check = useCallback(() => {
    if(subscribed){
      unsubribeToSource(id);
    } else {
      suscribeToSource(id);
    }
  }, [subscribed]);

  return (
    <Wrapper>
      <Name>
        <Checkbox
          type="checkbox"
          name={name}
          checked={subscribed}
          onChange={check}
        />
        <p>{name}</p>
      </Name>
        <Image src={logo} alt="" width="20px" />
    </Wrapper>
  );
};
