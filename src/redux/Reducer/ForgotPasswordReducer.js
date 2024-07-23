import { FORGOT_PASSWORD_FAILED, FORGOT_PASSWORD_LOADING, FORGOT_PASSWORD_SUCCESS } from "../Type";

const initialState = {
  loading: false,
  ForgotPassword: [],
  error: null,
};

const ForgotPasswordReducer = (state = initialState, action) => {
  console.log('API CALL', action.type);
  switch (action.type) {
    case FORGOT_PASSWORD_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        ForgotPassword: action.payload,
        error: null,
      };
    case FORGOT_PASSWORD_FAILED:
      return {
        ...state,
        loading: false,
        ForgotPassword: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default ForgotPasswordReducer;
