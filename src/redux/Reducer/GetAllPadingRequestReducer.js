import { REQUEST_RESTAURANT_PENDING_FAILED, REQUEST_RESTAURANT_PENDING_LOADING, REQUEST_RESTAURANT_PENDING_SUCCESS } from "../Type";

const initialState = {
  loading: false,
  GetAllPAdingRequest: [],
  error: null,
};

const GetAllPadingRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_RESTAURANT_PENDING_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_RESTAURANT_PENDING_SUCCESS:
      return {
        ...state,
        loading: false,
        GetAllPadingRequest: action.payload,
        error: null,
      };
    case REQUEST_RESTAURANT_PENDING_FAILED:
      return {
        ...state,
        loading: false,
        GetAllPadingRequest: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default GetAllPadingRequestReducer;
