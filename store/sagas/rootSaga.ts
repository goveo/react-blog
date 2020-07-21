import { all } from 'redux-saga/effects';
import { watchLoadAllPostsAsync, watchLoadPostAsync } from './posts.sagas';

export const rootSaga = function* root() {
  yield all([watchLoadAllPostsAsync(), watchLoadPostAsync()]);
};

export default rootSaga;