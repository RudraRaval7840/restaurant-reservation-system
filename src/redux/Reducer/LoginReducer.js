import { LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS } from "../Type";

const initialState = {
  loading: false,
  Login: [],
  error: null,
};

const LoginReducer = (state = initialState, action) => {
  console.log('API CALL', action.type);
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        Login: action.payload,
        error: null,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        Login: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default LoginReducer;
