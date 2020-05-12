import { glob } from 'solid-styled-components';

glob`
  body {
    --header-height: 2.5em;
    --footer-height: 2em;
    --min-content-height: 20em;
    --min-content-width: 20em;
  }

  html, body, #root {
    margin: 0;
    height: 100%;
    width: 100%;
  }
`;
