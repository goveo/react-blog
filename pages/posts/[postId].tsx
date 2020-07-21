import React from 'react';
import { useRouter } from 'next/router';
import Post from '../../components/Post';

const PostPage: React.FC = () => {
  const router = useRouter();
  //router.query.postId
  return <Post title={'test'} body={'body test'} />;
};

export default PostPage;
