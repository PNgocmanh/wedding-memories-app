import { MEMORIES } from "../../constants/actions";

const initialState = {
  isLoading: true,
  error: null,
  post: [],
};

const post = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MEMORIES.GET_LIST_MEMORIES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case MEMORIES.GET_LIST_MEMORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        post: payload,
      };
    case MEMORIES.GET_LIST_MEMORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case MEMORIES.CREATE_NEW_MEMORIES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case MEMORIES.CREATE_NEW_MEMORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case MEMORIES.CREATE_NEW_MEMORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default post;
