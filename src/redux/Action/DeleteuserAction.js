import axios from 'axios';
import {
  DELETE_USER_FAILED,
  DELETE_USER_LOADING,
  DELETE_USER_SUCCESS,
} from '../Type';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DeleteUserAction = _id => {
  return async dispatch => {
    dispatch({
      type: DELETE_USER_LOADING,
      payload: _id,
    });
    const token = await AsyncStorage.getItem('token');

    try {
      let config = {
        method: 'delete',
        url: ` https://compliance-obligation-pursuant-repairs.trycloudflare.com/api/user/deleteUser/${_id}`,
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
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
