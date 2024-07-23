import { GET_ALL_RESTAURANT_FAILED, GET_ALL_RESTAURANT_LOADING, GET_ALL_RESTAURANT_SUCCESS } from "../Type";

const initialState = {
  loading: false,
  AllRestaurent: [],
  error: null,
};

const AllRestaurentReducer = (state = initialState, action) => {
  console.log('API CALL', action.type);
  switch (action.type) {
    case GET_ALL_RESTAURANT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_RESTAURANT_SUCCESS:
      return {
        ...state,
        loading: false,
        AllRestaurent: action.payload,
        error: null,
      };
    case GET_ALL_RESTAURANT_FAILED:
      return {
        ...state,
        loading: false,
        AllRestaurent: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default AllRestaurentReducer;
