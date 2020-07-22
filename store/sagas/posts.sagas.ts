import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { setPosts, setPost, setLoading, loadAllPosts, loadPost } from '../actions/postsActions';
import {
  LOAD_ALL_POSTS_ASYNC,
  LOAD_POST_ASYNC,
  ADD_POST_ASYNC,
  COMMENT_POST_ASYNC,
  LoadPostAsyncAction,
  AddPostAsyncAction,
  CommentPostAsyncAction,
} from './types.sagas';
import { Post, Comment } from '../actions/types';

// Get Posts
export function* loadAllPostsAsync() {
  try {
    yield put(setLoading());
    const { data: posts }: { data: Post[] } = yield call(axios.get, '/posts/');
    yield put(setPosts(posts));
  } catch (error) {
    console.error(error.message);
  }
}

// Get Single Post
export function* loadPostAsync(action: LoadPostAsyncAction) {
  try {
    yield put(setLoading());
    const { data: post }: { data: Post } = yield call(axios.get, `/posts/${action.payload}`);
    const { data: comments }: { data: Comment[] } = yield call(axios.get, `/comments?postId=${post.id}`);
    const newPost: Post = { ...post, comments };
    yield put(setPost(newPost));
  } catch (error) {
    console.error(error.message);
  }
}

// Add Post
export function* addPostAsync(action: AddPostAsyncAction) {
  try {
    yield put(setLoading());
    const { data: post }: { data: Post } = yield call(axios.post, '/posts/', action.payload);
    yield put(setPost(post));
    yield put(loadAllPosts());
  } catch (error) {
    console.error(error.message);
  }
}

// Add Comment
export function* commentPostAsync(action: CommentPostAsyncAction) {
  try {
    yield put(setLoading());
    const { data: comment }: { data: Comment } = yield call(axios.post, '/comments/', action.payload);
    yield put(loadPost(comment.postId));
  } catch (error) {
    console.error(error.message);
  }
}

// Watchers
export function* watchLoadAllPostsAsync() {
  yield takeEvery(LOAD_ALL_POSTS_ASYNC, loadAllPostsAsync);
}

export function* watchLoadPostAsync() {
  yield takeEvery(LOAD_POST_ASYNC, loadPostAsync);
}

export function* watchAddPostAsync() {
  yield takeEvery(ADD_POST_ASYNC, addPostAsync);
}

export function* watchCommentPostAsync() {
  yield takeEvery(COMMENT_POST_ASYNC, commentPostAsync);
}
