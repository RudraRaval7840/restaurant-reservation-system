import * as ACTION from "../Type";
const initialState = {
  isLoading: false,
  deletedRestaurantId: null,
  error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION.DELETE_RESTAURANT_LOADING:
      return {
        ...state,
        isLoading: true,
        deletedRestaurantId: null,
        error: "",
      };
    case ACTION.DELETE_RESTAURANT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        deletedRestaurantId: action.payload, 
        error: "",
      };
    case ACTION.DELETE_RESTAURANT_FAILED:
      return {
        ...state,
        isLoading: false,
        deletedRestaurantId: null,
        error: action.payload,
      };
    default:
      return state;
  }
}
