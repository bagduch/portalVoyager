import { userConstants } from "../constants";

let user = localStorage.getItem("user");
const initialState = user ? { loggedIn: true, user } : {};

export function auth(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggedIn: true,
        user: action.user,
      };

    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };

    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
        user: {},
      };
    default:
      return state;
  }
}
