import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';

import { App } from './features/app/component';

const container = document.querySelector('#root');

if(!container){
  throw new Error('root not found');
}

render(<App/>, container);
