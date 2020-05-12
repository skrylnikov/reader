import { declareAction } from '@reatom/core';
import redaxios from 'redaxios';

const loadFeedDone = declareAction('loadFeedDone');

export const loadFeed = declareAction('loadFeed', async () => {
  redaxios.get('/feed');
});


import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: '/api',
});

import { gql } from "apollo-boost";
// or you can use `import gql from 'graphql-tag';` instead

client
  .query({
    query: gql`
      {
        feed {
          id
          author
          text
        }
      }
    `
  })
  .then(result => console.log(result));
