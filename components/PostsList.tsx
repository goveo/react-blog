import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect, ConnectedProps } from 'react-redux';
import Loader from './Loader';
import { List } from '@material-ui/core';
import { PostProps } from './Post';

import { loadAllPosts } from '../store/actions/postsActions';
import { PostsState } from '../store/actions/types';
import { lastPostsSelector } from '../store/selectors/postsSelector';
import PostListItem from './PostListItem';

const mapStateToProps = (state: { posts: PostsState }) => ({
  posts: lastPostsSelector(state.posts),
  loading: state.posts.loading,
});
const connector = connect(mapStateToProps, { loadAllPosts });

const PostsList: React.FC<ConnectedProps<typeof connector>> = ({ posts, loading, loadAllPosts }) => {
  useEffect(() => {
    loadAllPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <List aria-label="posts">
          {posts.map((post: PostProps) => (
            <ListItem title={post.title} id={post.id} key={post.id.toString()} />
          ))}
        </List>
      )}
    </>
  );
};

const ListItem = styled(PostListItem)`
  margin-bottom: 20px;
  word-wrap: break-word;
`;

export default connector(PostsList);
