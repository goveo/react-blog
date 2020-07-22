import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { connect, ConnectedProps } from 'react-redux';
import { useRouter } from 'next/router';
import Post from '../../components/Post';
import { PostsState } from '../../store/actions/types';
import { loadPost, clearPost } from '../../store/actions/postsActions';
import Page from '../../components/Page';
import AddCommentForm from '../../components/forms/AddCommentForm';
import CommentsList from '../../components/CommentsList';

const mapStateToProps = (state: { posts: PostsState }) => ({
  post: state.posts.post,
  loading: state.posts.loading,
});
const connector = connect(mapStateToProps, { loadPost, clearPost });

const PostPage: React.FC<ConnectedProps<typeof connector>> = ({ post, loading, loadPost, clearPost }) => {
  const router = useRouter();

  const postId = useMemo(() => {
    return Number(router.query.postId);
  }, [router.query.postId]);

  useEffect(() => {
    if (postId) loadPost(postId);
    return () => {
      clearPost();
    };
  }, [clearPost, loadPost, postId]);

  return (
    <Page loading={loading}>
      <Post {...post} />

      {post && (
        <CommentsWrapper>
          <CommentsList comments={post.comments} />
          <AddCommentForm postId={post.id} />
        </CommentsWrapper>
      )}
    </Page>
  );
};

const CommentsWrapper = styled.div`
  margin: 30px 0;
`;

export default connector(PostPage);
