import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { mediaWidth } from '../lib/mediaWidth';

export interface PostProps {
  id: number;
  title: string;
  body: string;
}

export const Post: React.FC<PostProps> = ({ id, title, body }) => {
  return (
    <>
      <Title>{title}</Title>
      <Body>{body}</Body>
      <IdText>ID: {id}</IdText>
    </>
  );
};

export const Title = styled(Typography)`
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

const Body = styled(Typography)`
  font-size: 16px;

  ${mediaWidth.s} {
    font-size: 18px;
  }

  ${mediaWidth.m} {
    font-size: 20px;
  }
`;

const IdText = styled(Typography)`
  font-size: 12px;
  font-weight: 300;
`;

export default Post;
