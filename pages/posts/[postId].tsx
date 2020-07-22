import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { connect, ConnectedProps } from 'react-redux';
import { useRouter } from 'next/router';
import Post from '../../components/Post';
import { PostsState } from '../../store/actions/types';
import { loadPost, clearPost, setError } from '../../store/actions/postsActions';
import Page from '../../components/pages/Page';
import AddCommentForm from '../../components/forms/AddCommentForm';
import CommentsList from '../../components/CommentsList';

const mapStateToProps = (state: { posts: PostsState }) => ({
  post: state.posts.post,
  loading: state.posts.loading,
  error: state.posts.error,
});
const connector = connect(mapStateToProps, { loadPost, clearPost, setError });

const PostPage: React.FC<ConnectedProps<typeof connector>> = ({
  post,
  loading,
  error,
  loadPost,
  clearPost,
  setError,
}) => {
  const router = useRouter();

  const postId = useMemo(() => {
    const id = Number(router.query.postId);
    if (isNaN(id) || !id) return null;
    return id;
  }, [router.query.postId]);

  useEffect(() => {
    if (postId) loadPost(postId);
    else setError('Post Not Found');

    return () => {
      clearPost();
    };
  }, [clearPost, loadPost, setError, postId]);

  return (
    <Page loading={loading} error={error}>
      {!error && post && (
        <>
          <Post {...post} />

          <CommentsWrapper>
            <CommentsList comments={post.comments} />
            <AddCommentForm postId={post.id} />
          </CommentsWrapper>
        </>
      )}
    </Page>
  );
};

const CommentsWrapper = styled.div`
  margin: 30px 0;
`;

export default connector(PostPage);
