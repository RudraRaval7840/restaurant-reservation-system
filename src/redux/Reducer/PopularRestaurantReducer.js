import { POPULAR_RESTAURENT_FAILED, POPULAR_RESTAURENT_LOADING, POPULAR_RESTAURENT_SUCCESS } from "../Type";

const initialState = {
  loading: false,
  PopularRestaurant: [],
  error: null,
};

const PopularRestaurantReducer = (state = initialState, action) => {
  // console.log('API CALL', action.type);
  switch (action.type) {
    case POPULAR_RESTAURENT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case POPULAR_RESTAURENT_SUCCESS:
      return {
        ...state,
        loading: false,
        PopularRestaurant: action.payload,
        error: null,
      };
    case POPULAR_RESTAURENT_FAILED:
      return {
        ...state,
        loading: false,
        PopularRestaurant: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default PopularRestaurantReducer;
