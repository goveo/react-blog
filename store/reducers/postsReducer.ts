import { GET_POSTS, GET_POST, ADD_POST, PostsActionTypes, PostsState, CLEAR_POST, SET_LOADING } from '../actions/types';

const initialState = {
  posts: [],
  post: null,
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
    case CLEAR_POST:
      return {
        ...state,
        post: null,
        loading: false,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
