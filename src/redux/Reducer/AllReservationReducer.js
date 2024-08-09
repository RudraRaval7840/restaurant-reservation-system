import { GET_ALL_RESERVATION_FAILED, GET_ALL_RESERVATION_LOADING, GET_ALL_RESERVATION_SUCCESS } from "../Type";

const initialState = {
  loading: false,
  Reservation: [],
  error: null,
};

const AllReservationReducer = (state = initialState, action) => {
  // console.log('API CALL', action.type);
  switch (action.type) {
    case GET_ALL_RESERVATION_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_RESERVATION_SUCCESS:
      return {
        ...state,
        loading: false,
        Reservation: action.payload,
        error: null,
      };
    case GET_ALL_RESERVATION_FAILED:
      return {
        ...state,
        loading: false,
        Reservation: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default AllReservationReducer;
