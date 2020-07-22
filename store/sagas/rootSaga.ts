import { all, AllEffect } from 'redux-saga/effects';
import { watchLoadAllPostsAsync, watchLoadPostAsync, watchAddPostAsync, watchCommentPostAsync } from './posts.sagas';

export const rootSaga = function* root(): IterableIterator<AllEffect<any>> {
  yield all([watchLoadAllPostsAsync(), watchLoadPostAsync(), watchAddPostAsync(), watchCommentPostAsync()]);
};

export default rootSaga;
