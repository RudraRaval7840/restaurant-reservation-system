import { ADD_REQUEST_RESTAURANT_FAILED, ADD_REQUEST_RESTAURANT_LOADING, ADD_REQUEST_RESTAURANT_SUCCESS } from "../Type";

const initialState = {
  loading: false,
  AddRequestRestaurant: [],
  error: null,
};

const AddRequestRestaurantReducer = (state = initialState, action) => {
  // console.log('API CALL', action.type);
  switch (action.type) {
    case ADD_REQUEST_RESTAURANT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_REQUEST_RESTAURANT_SUCCESS:
      return {
        ...state,
        loading: false,
        AddRequestRestaurant: action.payload,
        error: null,
      };
    case ADD_REQUEST_RESTAURANT_FAILED:
      return {
        ...state,
        loading: false,
        AddRequestRestaurant: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default AddRequestRestaurantReducer;
