import {  } from 'react-dom';

console.log('hello world');
import React from 'react';
import { render } from 'react-dom';

import { App } from './features/app/component';

const container = document.getElementById('root');

if(!container){
  throw new Error('root not found');
}

render(<App/>, container);
