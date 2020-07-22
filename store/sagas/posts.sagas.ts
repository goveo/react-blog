import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { setPosts, setPost, setLoading, loadAllPosts } from '../actions/postsActions';
import {
  LOAD_ALL_POSTS_ASYNC,
  LOAD_POST_ASYNC,
  ADD_POST_ASYNC,
  LoadPostAsyncAction,
  AddPostAsyncAction,
} from './types.sagas';
import { Post } from '../actions/types';

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
    yield put(setPost(post));
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
