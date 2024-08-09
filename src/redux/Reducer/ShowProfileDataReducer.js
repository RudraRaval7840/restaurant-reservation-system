import { SHOW_PROFILE_DATA_FAILED, SHOW_PROFILE_DATA_LOADING, SHOW_PROFILE_DATA_SUCCESS } from "../Type";

const initialState = {
  loading: false,
  ShowProfile: [],
  error: null,
};

const ShowProfileReducer = (state = initialState, action) => {
  // console.log('API CALL', action.type);
  switch (action.type) {
    case SHOW_PROFILE_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SHOW_PROFILE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        ShowProfile: action.payload,
        error: null,
      };
    case SHOW_PROFILE_DATA_FAILED:
      return {
        ...state,
        loading: false,
        ShowProfile: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default ShowProfileReducer;
