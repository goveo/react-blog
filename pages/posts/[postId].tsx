import React, { useEffect, useMemo } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useRouter } from 'next/router';
import Post from '../../components/Post';
import { PostsState } from '../../store/actions/types';
import { loadPost, clearPost } from '../../store/actions/postsActions';
import Page from '../../components/Page';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import AddCommentForm from '../../components/forms/AddCommentForm';

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
        <>
          <Typography>Comments: </Typography>
          {post.comments && post.comments.length > 0 ? (
            <List aria-label="comments">
              {post.comments.map((comment) => (
                <ListItem key={comment.id.toString()}>
                  <ListItemText primary={comment.body} />
                </ListItem>
              ))}
            </List>
          ) : (
            'No comments'
          )}

          <AddCommentForm postId={post.id} />
        </>
      )}
    </Page>
  );
};

export default connector(PostPage);
