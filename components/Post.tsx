import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export interface PostProps {
  id: number;
  title: string;
  body: string;
}

export const Post: React.FC<PostProps> = ({ title, body }) => {
  return (
    <>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </>
  );
};

export const Title = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
`;

const Body = styled(Typography)`
  font-size: 16px;
`;

export default Post;
