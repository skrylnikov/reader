import { Wrapper } from './style';

import { IPost } from 'types/feed';

interface Props {
  post: IPost;
}

export const Post = ({post}: Props) => {
  return (
    <Wrapper>
      {post.text}
    </Wrapper>
  );
}
