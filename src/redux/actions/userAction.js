import { USER } from "../../constants/actions";
import { userService } from "../../services/userService";

export const register = (data, navigate) => async (dispatch) => {
  dispatch({
    type: USER.SIGN_UP_REQUEST,
  });
  try {
    await userService.signup(data);
    const dataImg = new FormData();
    dataImg.append("file", "");
    dataImg.append("upload_preset", "ucoqg5b9");
    dataImg.append("api_key", "787283274454775");

    navigate("/login");
    dispatch({
      type: USER.SIGN_UP_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: USER.SIGN_UP_FAILURE,
    });
  }
};

export const login = (data, navigate) => async (dispatch) => {
  dispatch({
    type: USER.LOGIN_REQUEST
  })
  try {
    const user = await userService.login(data);

    localStorage.setItem("token", user.data.token);

    dispatch({ type: USER.LOGIN_SUCCESS })
    navigate('/')
  } catch (error) {
    dispatch({
      type: USER.LOGIN_FAILURE,
      payload: error
    })
  }
};

export const logout = (navigate) => async (dispatch) => {
  localStorage.removeItem('token');
  dispatch({type:USER.LOGOUT});
  navigate('/')
};
