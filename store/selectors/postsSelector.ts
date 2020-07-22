import { createSelector } from 'reselect';
import { sortedUniqBy, takeRight, reverse } from 'lodash/fp';
import { PostsState } from '../actions/types';

export const NUMBER_OF_LAST_POSTS = 7;

const getPosts = (state: PostsState) => state.posts.filter((post) => post.title && post.body);

export const lastPostsSelector = createSelector(getPosts, (posts) => {
  return reverse(takeRight(NUMBER_OF_LAST_POSTS)(sortedUniqBy('id')(posts)));
});
