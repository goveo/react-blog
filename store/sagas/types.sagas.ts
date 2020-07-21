export const LOAD_ALL_POSTS_ASYNC = 'LOAD_ALL_POSTS_ASYNC';
export const LOAD_POST_ASYNC = 'LOAD_POST_ASYNC';
export const ADD_POST_ASYNC = 'ADD_POST_ASYNC';

export interface PostPayload {
  title: string;
  body: string;
}

export interface LoadAllPostsAsyncAction {
  type: typeof LOAD_ALL_POSTS_ASYNC;
}

export interface LoadPostAsyncAction {
  type: typeof LOAD_POST_ASYNC;
  payload: number; // id
}

export interface AddPostAsyncAction {
  type: typeof ADD_POST_ASYNC;
  payload: PostPayload;
}

export type PostsActionSagaTypes = LoadAllPostsAsyncAction | LoadPostAsyncAction | AddPostAsyncAction;
