import { all } from 'redux-saga/effects';
import { watchLoadAllPostsAsync, watchLoadPostAsync, watchAddPostAsync } from './posts.sagas';

export const rootSaga = function* root() {
  yield all([watchLoadAllPostsAsync(), watchLoadPostAsync(), watchAddPostAsync()]);
};

export default rootSaga;
