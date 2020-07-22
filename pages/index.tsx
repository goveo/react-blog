import React from 'react';
import Page from '../components/pages/Page';
import PostsList from '../components/post/PostsList';
import AddPostButton from '../components/buttons/AddPostButton';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const Home: React.FC = () => {
  return (
    <Page>
      <Title>Latest Posts:</Title>
      <AddPostButton />
      <PostsList />
    </Page>
  );
};

const Title = styled(Typography)`
  font-size: 36px;
  font-weight: bold;
`;

export default Home;
