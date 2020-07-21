import React from 'react';
import { Typography } from '@material-ui/core';
import Page from '../components/Page';
import PostsList from '../components/PostsList';

const Home: React.FC = () => {
  return (
    <Page>
      <Typography variant="h2" component="h1">
        Home
      </Typography>
      <PostsList />
    </Page>
  );
};

export default Home;
