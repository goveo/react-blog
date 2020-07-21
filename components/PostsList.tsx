import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Link from 'next/link';
import { PostProps, Title } from './Post';

import { loadAllPosts } from '../store/actions/postsActions';
import { PostsState } from '../store/actions/types';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';

const mapStateToProps = (state: { posts: PostsState }) => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
});
const connector = connect(mapStateToProps, { loadAllPosts });

const PostsList: React.FC<ConnectedProps<typeof connector>> = ({ posts, loading, loadAllPosts }) => {
  useEffect(() => {
    loadAllPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <List component="nav" aria-label="main mailbox folders">
      {posts.map((post: PostProps) => (
        <Link href={'posts/[postId]'} as={`posts/${post.id}`} key={post.id.toString()}>
          <ListItem button>
            <ListItemText primary={<Title>{post.title}</Title>} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default connector(PostsList);
