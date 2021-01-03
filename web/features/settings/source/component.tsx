import React from 'react';

import { Wrapper, Name, Image, Checkbox } from './style';

interface IProps {
  id: number;
  name: string;
  logo: string;
}

export const Source = ({ name, logo }: IProps): JSX.Element => {

  return (
    <Wrapper>
      <Name>
        <Checkbox type="checkbox" name={name} />
        <p>{name}</p>
      </Name>
        <Image src={logo} alt="" width="20px" />
    </Wrapper>
  );
};
