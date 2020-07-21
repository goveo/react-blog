export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export const ADD_POST = 'ADD_POST';

export interface Post {
  id: number;
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

export interface AddPostAction {
  type: typeof ADD_POST;
  payload: Post;
}

export type PostsActionTypes = GetPostsAction | GetPostAction | AddPostAction;
