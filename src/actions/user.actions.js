import axios from "axios";
import { apiConfig } from "../configs";
import { userConstants } from "../constants";
import history from "../history";

export const userActions = {
  login,
};

function login(values) {
  return (dispatch) => {
    dispatch(request(values.email));
    axios
      .post(`${apiConfig.URL}/auth/login`, values)
      .then((res) => {
        dispatch(success(res.data.id));
        localStorage.setItem("user", res.data.token);
        history.push("/");
      })
      .catch((errors) => {
        dispatch(failure(errors));
      });
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}
