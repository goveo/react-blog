import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  PostsActionTypes,
  PostsState,
  CLEAR_POST,
  SET_LOADING,
  SET_ERROR,
} from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: null,
};

export default (state = initialState, action: PostsActionTypes): PostsState => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
        error: null,
      };
    case CLEAR_POST:
      return {
        ...state,
        post: null,
        loading: false,
        error: null,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false,
        error: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
