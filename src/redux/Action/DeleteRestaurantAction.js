import axios from 'axios';
import {
  DELETE_RESTAURANT_FAILED,
  DELETE_RESTAURANT_LOADING,
  DELETE_RESTAURANT_SUCCESS,
} from '../Type';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DeleteRestaurantAction = _id => {
  return async dispatch => {
    dispatch({
      type: DELETE_RESTAURANT_LOADING,
      payload: _id,
    });
    const token = await AsyncStorage.getItem('token');

    try {
      let config = {
        method: 'delete',
        url: ` https://compliance-obligation-pursuant-repairs.trycloudflare.com/api/restaurant/deleteRestaurant/${_id}`,
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      };
      console.log('API Response:', config);

      const response = await axios.request(config);
      console.log(config, 'Delete===========');
      console.log('Response:', response.data);

      dispatch({
        type: DELETE_RESTAURANT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log('Book deletion failed', error);
      console.log(config, 'Delete===========');

      dispatch({
        type: DELETE_RESTAURANT_FAILED,
        payload: {
          error: 'Something went wrong, please try again later.',
        },
      });
    }
  };
};
