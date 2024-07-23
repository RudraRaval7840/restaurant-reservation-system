import { LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS, VERIFY_OTP_FAILED, VERIFY_OTP_LOADING, VERIFY_OTP_SUCCESS } from "../Type";

const initialState = {
  loading: false,
  VerifyOtp: [],
  error: null,
};

const VerifyOtpReducer = (state = initialState, action) => {
  console.log('API CALL', action.type);
  switch (action.type) {
    case VERIFY_OTP_LOADING:
      return {
        ...state,
        loading: true,
      };
    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        VerifyOtp: action.payload,
        error: null,
      };
    case VERIFY_OTP_FAILED:
      return {
        ...state,
        loading: false,
        VerifyOtp: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default VerifyOtpReducer;
