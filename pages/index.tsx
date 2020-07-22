import React from 'react';
import Page from '../components/Page';
import PostsList from '../components/PostsList';
import AddPostButton from '../components/buttons/AddPostButton';

const Home: React.FC = () => {
  return (
    <Page>
      <AddPostButton />
      <PostsList />
    </Page>
  );
};

export default Home;
