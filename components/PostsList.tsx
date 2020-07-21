import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Link from 'next/link';
import { Title, PostProps } from './Post';

import { loadAllPosts } from '../store/actions/postsActions';
import { PostsState } from '../store/actions/types';

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
    <>
      {posts.map((post: PostProps) => (
        <Link href={`posts/${post.id}`}>
          <Title>{post.title}</Title>
        </Link>
      ))}
    </>
  );
};

export default connector(PostsList);
