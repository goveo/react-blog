import { GET_POSTS, GET_POST, CLEAR_POST, SET_LOADING, Post, PostsActionTypes, SET_ERROR } from './types';

import {
  LOAD_ALL_POSTS_ASYNC,
  LOAD_POST_ASYNC,
  ADD_POST_ASYNC,
  PostsActionSagaTypes,
  COMMENT_POST_ASYNC,
  PostPayload,
  CommentPayload,
} from '../sagas/types.sagas';

// Load Posts
export const loadAllPosts = (): PostsActionSagaTypes => ({ type: LOAD_ALL_POSTS_ASYNC });
export const setPosts = (posts: Post[]): PostsActionTypes => ({ type: GET_POSTS, payload: posts });

export const loadPost = (id: number): PostsActionSagaTypes => ({ type: LOAD_POST_ASYNC, payload: id });
export const setPost = (post: Post): PostsActionTypes => ({ type: GET_POST, payload: post });
export const clearPost = (): PostsActionTypes => ({ type: CLEAR_POST });

// Add Post
export const addPost = (post: PostPayload): PostsActionSagaTypes => ({ type: ADD_POST_ASYNC, payload: post });

// Add Comment
export const addComment = (comment: CommentPayload): PostsActionSagaTypes => ({
  type: COMMENT_POST_ASYNC,
  payload: comment,
});

// Set loading
export const setLoading = (): PostsActionTypes => ({ type: SET_LOADING });

// Set error
export const setError = (error: string): PostsActionTypes => ({ type: SET_ERROR, payload: error });
