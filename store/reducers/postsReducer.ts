import { GET_POSTS, GET_POST, ADD_POST, PostsActionTypes, PostsState, Post } from '../actions/types';

const initialState = {
  posts: [],
  post: {} as Post,
  loading: true,
};

export default (state = initialState, action: PostsActionTypes): PostsState => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false,
      };
    default:
      return state;
  }
};
