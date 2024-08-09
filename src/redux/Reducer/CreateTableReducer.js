import { CREATE_TABLE_FAILED, CREATE_TABLE_LOADING, CREATE_TABLE_SUCCESS } from "../Type";

const initialState = {
  loading: false,
  CreateTable: [],
  error: null,
};

const CreateTableReducer = (state = initialState, action) => {
  // console.log('API CALL', action.type);
  switch (action.type) {
    case CREATE_TABLE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CREATE_TABLE_SUCCESS:
      return {
        ...state,
        loading: false,
        CreateTable: action.payload,
        error: null,
      };
    case CREATE_TABLE_FAILED:
      return {
        ...state,
        loading: false,
        CreateTable: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default CreateTableReducer;
