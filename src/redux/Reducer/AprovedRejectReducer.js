// reducers/updatePasswordReducer.js

import { APPROVED_REJECTED_FAILED, APPROVED_REJECTED_LOADING, APPROVED_REJECTED_SUCCESS } from "../Type";


const initialState = {
  loading: false,
  ApprovedReject: false,
  error: null,
};

const ApprovedRejectReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPROVED_REJECTED_LOADING:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case APPROVED_REJECTED_SUCCESS:
      return {
        ...state,
        loading: false,
        ApprovedReject: true,
        error: null,
      };
    case APPROVED_REJECTED_FAILED:
      return {
        ...state,
        loading: false,
        ApprovedReject: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default ApprovedRejectReducer;
