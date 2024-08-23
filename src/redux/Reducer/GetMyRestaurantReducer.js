import { GET_MY_RESTAURANT_FAILED, GET_MY_RESTAURANT_LOADING, GET_MY_RESTAURANT_SUCCESS } from "../Type";

const initialState = {
  loading: false,
  GetMyRestaurant: [],
  error: null,
};

const GetMyRestaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_RESTAURANT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_MY_RESTAURANT_SUCCESS:
      return {
        ...state,
        loading: false,
        GetMyRestaurant: action.payload,
        error: null,
      };
    case GET_MY_RESTAURANT_FAILED:
      return {
        ...state,
        loading: false,
        GetMyRestaurant: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default GetMyRestaurantReducer;
