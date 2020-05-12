import { createEffect } from 'solid-js';
import { For } from 'solid-js/dom';
import { useAtom, useAction } from 'reatom-solid';

import { Post } from './post';

import { Wrapper } from './style';

import { postListAtom, setPostList } from '../store';

import { } from './model';

export const Feed = () => {
  const postList = useAtom(postListAtom);

  const removePostList = useAction(() => setPostList([]));

  setTimeout(() => removePostList(), 2000);

  createEffect(()=> console.warn(postList()));

  return (
    <Wrapper>
      <For each={postList()} fallback={<div>Loading...</div>}>
        {item => <Post post={item}/>}
      </For>
    </Wrapper>
  );
}
