import {
  declareAction,
  declareAtom,
  createStore,
  Atom,
} from '@reatom/core'

import { IPost } from 'types/feed';

export const setPostList = declareAction<IPost[]>('setPostList');

export const postListAtom = declareAtom<IPost[]>([], (on) => [
  on(setPostList, (state, payload) => payload),
]);

console.log(postListAtom);


export const store = createStore(postListAtom);

store.subscribe(postListAtom, console.log);



store.dispatch(setPostList([
  {
    id: '1',
    author: 'dskr',
    text: 'hello world',
  },
  {
    id: '2',
    author: 'dskr',
    text: 'hello world 2',
  },
]));


setTimeout(() => store.dispatch(setPostList([
  {
    id: '1',
    author: 'dskr',
    text: 'hello world',
  },
  {
    id: '2',
    author: 'dskr',
    text: 'hello world 2',
  },
  {
    id: '3',
    author: 'dskr',
    text: 'hello world 3',
  },
])), 5000)