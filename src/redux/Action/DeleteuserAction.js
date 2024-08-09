import axios from 'axios';
import {
  DELETE_USER_FAILED,
  DELETE_USER_LOADING,
  DELETE_USER_SUCCESS,
} from '../Type';

export const DeleteUserAction = _id => {
  return async dispatch => {
    dispatch({
      type: DELETE_USER_LOADING,
      payload: _id,
    });

    try {
      let config = {
        method: 'delete',
        url: ` https://uncertainty-laboratory-mel-springfield.trycloudflare.com/api/user/deleteUser/${_id}`,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      console.log('API Response:', config);

      const response = await axios.request(config);
      console.log(config, 'Delete===========');
      console.log('user delete Response:', response.data);

      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log('user delete failed', error);
      console.log(config, 'Delete===========');

      dispatch({
        type: DELETE_USER_FAILED,
        payload: {
          error: 'Something went wrong, please try again later.',
        },
      });
    }
  };
};
