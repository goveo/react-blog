import { GET_POSTS, GET_POST, ADD_POST, Post, PostsActionTypes } from './types';

import { LOAD_ALL_POSTS_ASYNC, LOAD_POST_ASYNC, ADD_POST_ASYNC, PostsActionSagaTypes } from '../sagas/types.sagas';

// Load Posts
export const loadAllPosts = (): PostsActionSagaTypes => ({ type: LOAD_ALL_POSTS_ASYNC });
export const setPosts = (posts: Post[]): PostsActionTypes => ({ type: GET_POSTS, payload: posts });

export const loadPost = (id: number): PostsActionSagaTypes => ({ type: LOAD_POST_ASYNC, payload: id });
export const setPost = (post: Post): PostsActionTypes => ({ type: GET_POST, payload: post });

// Add Post
export const addPost = (post: Post): PostsActionSagaTypes => ({ type: ADD_POST_ASYNC, payload: post });
