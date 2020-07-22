import React from 'react';
import Page from '../components/Page';
import PostsList from '../components/PostsList';

const Home: React.FC = () => {
  return (
    <Page>
      <PostsList />
    </Page>
  );
};

export default Home;
