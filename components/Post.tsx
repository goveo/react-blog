import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { mediaWidth } from '../lib/media/mediaWidth';

export interface PostProps {
  id: number;
  title: string;
  body: string;
}

const Post: React.FC<PostProps> = ({ id, title, body }) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <PostBody>{body}</PostBody>
      <PostId>ID: {id}</PostId>
    </>
  );
};

const PostTitle = styled(Typography)`
  line-height: 90%;
  margin: 24px auto;

  font-weight: bold;
  font-size: 32px;

  ${mediaWidth.s} {
    font-size: 40px;
  }

  ${mediaWidth.m} {
    font-size: 48px;
  }

  ${mediaWidth.l} {
    font-size: 56px;
  }
`;

const PostBody = styled(Typography)`
  font-size: 16px;

  ${mediaWidth.s} {
    font-size: 18px;
  }

  ${mediaWidth.m} {
    font-size: 20px;
  }
`;

const PostId = styled(Typography)`
  font-size: 12px;
  font-weight: 300;
`;

export { Post, PostTitle, PostBody, PostId };

export default Post;
