import { NEW_PASSWORD_FAILED, NEW_PASSWORD_LOADING, NEW_PASSWORD_SUCCESS } from "../Type";

const initialState = {
  loading: false,
  NewPassword: [],
  error: null,
};

const NewPasswordReducer = (state = initialState, action) => {
  // console.log('API CALL', action.type);
  switch (action.type) {
    case NEW_PASSWORD_LOADING:
      return {
        ...state,
        loading: true,
      };
    case NEW_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        NewPassword: action.payload,
        error: null,
      };
    case NEW_PASSWORD_FAILED:
      return {
        ...state,
        loading: false,
        NewPassword: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default NewPasswordReducer;
