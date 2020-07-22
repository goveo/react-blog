export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export const CLEAR_POST = 'CLEAR_POST';
export const ADD_POST = 'ADD_POST';
export const SET_LOADING = 'SET_LOADING';

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostPayload {
  title: string;
  body: string;
}

export interface PostsState {
  posts: Post[];
  post: Post;
  loading: boolean;
}

export interface GetPostsAction {
  type: typeof GET_POSTS;
  payload: Post[];
}

export interface GetPostAction {
  type: typeof GET_POST;
  payload: Post;
}

export interface ClearPostAction {
  type: typeof CLEAR_POST;
}

export interface AddPostAction {
  type: typeof ADD_POST;
  payload: Post;
}

export interface SetLoadingAction {
  type: typeof SET_LOADING;
}

export type PostsActionTypes = GetPostsAction | GetPostAction | ClearPostAction | AddPostAction | SetLoadingAction;
