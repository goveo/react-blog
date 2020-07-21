import React from 'react';
import styled from 'styled-components';
import { Typography, Divider } from '@material-ui/core';
import Page from '../components/Page';
import PostsList from '../components/PostsList';

const Home: React.FC = () => {
  return (
    <Page>
      <Typography variant="h3">Posts:</Typography>
      <StyledDivider />
      <PostsList />
    </Page>
  );
};

const StyledDivider = styled(Divider)`
  margin: 20px 0;
`;

export default Home;
