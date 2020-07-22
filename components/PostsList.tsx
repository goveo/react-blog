import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Link from 'next/link';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { PostProps, PostTitle } from './Post';

import { loadAllPosts } from '../store/actions/postsActions';
import { PostsState } from '../store/actions/types';
import AddPostButton from './buttons/AddPostButton';
import { lastPostsSelector } from '../store/selectors/postsSelector';

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
      <AddPostButton />
      <List aria-label="posts">
        {posts.map((post: PostProps) => (
          <Link href={'posts/[postId]'} as={`posts/${post.id}`} key={post.id.toString()}>
            <ListItem button>
              <ListItemText primary={<PostTitle>{post.title}</PostTitle>} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default connector(PostsList);
