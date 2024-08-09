import {CREATE_RESTAURANT_FAILED, CREATE_RESTAURANT_LOADING, CREATE_RESTAURANT_SUCCESS, LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS} from '../Type';

const initialState = {
  loading: false,
  CreateRestaurant: [],
  error: null,
};

const CreateRestaurantReducer = (state = initialState, action) => {
  // console.log('API CALL', action.type);
  switch (action.type) {
    case CREATE_RESTAURANT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CREATE_RESTAURANT_SUCCESS:
      return {
        ...state,
        loading: false,
        CreateRestaurant: action.payload,
        error: null,
      };
    case CREATE_RESTAURANT_FAILED:
      return {
        ...state,
        loading: false,
        CreateRestaurant: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default CreateRestaurantReducer;
