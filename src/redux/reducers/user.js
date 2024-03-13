import { USER } from "../../constants/actions";

const initialState = {
  isLoading: true,
  error: null,
  profile: [],
  token: null,
};

const user = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case USER.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        profile: payload,
      };
    case USER.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case USER.SIGN_UP_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case USER.SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case USER.SIGN_UP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default user;
