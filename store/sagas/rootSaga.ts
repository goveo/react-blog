import { all } from 'redux-saga/effects';
import { watchLoadAllPostsAsync, watchLoadPostAsync, watchAddPostAsync, watchCommentPostAsync } from './posts.sagas';

export const rootSaga = function* root() {
  yield all([watchLoadAllPostsAsync(), watchLoadPostAsync(), watchAddPostAsync(), watchCommentPostAsync()]);
};

export default rootSaga;
