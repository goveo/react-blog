import React from 'react';
import { Typography } from '@material-ui/core';
import Page from '../components/Page';

const Home: React.FC = () => {
  return (
    <Page>
      <Typography variant="h2" component="h1">
        Home
      </Typography>
    </Page>
  );
};

export default Home;
