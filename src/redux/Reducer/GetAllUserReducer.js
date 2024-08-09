import { GET_ALL_USER_FAILED, GET_ALL_USER_LOADING, GET_ALL_USER_SUCCESS } from "../Type";

const initialState = {
  loading: false,
  GetAllUser: [],
  error: null,
};

const GetAllUserReducer = (state = initialState, action) => {
  // console.log('API CALL', action.type);
  switch (action.type) {
    case GET_ALL_USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        GetAllUser: action.payload,
        error: null,
      };
    case GET_ALL_USER_FAILED:
      return {
        ...state,
        loading: false,
        GetAllUser: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default GetAllUserReducer;
