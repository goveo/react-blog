import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

interface Props {
  title: string;
  body: string;
}

const Post: React.FC<Props> = ({ title, body }) => {
  return (
    <>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </>
  );
};

const Title = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
`;

const Body = styled(Typography)`
  font-size: 16px;
`;

export default Post;
