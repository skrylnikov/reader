import "solid-js";
import { render } from 'solid-js/dom';
import { ThemeProvider } from 'solid-styled-components';

import { App } from './app';
import * as serviceWorker from './serviceWorker';
import './style';
import { getTheme } from './theme';
import { context } from 'reatom-solid';

import { store } from './store';

const theme = getTheme('light');



render(()=> (
  <context.Provider value={store}><ThemeProvider theme={theme}><App /></ThemeProvider></context.Provider>
), document.getElementById('root') as Node);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

fetch('/api').then(response =>response.text()).then(console.log).catch(console.error);