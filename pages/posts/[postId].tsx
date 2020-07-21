import { useRouter } from 'next/router';

const Post: React.FC = () => {
  const router = useRouter();
  return <h1>Post {router.query.postId}</h1>;
};

export default Post;
