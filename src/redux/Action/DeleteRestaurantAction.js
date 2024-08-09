import axios from 'axios';
import {
  DELETE_RESTAURANT_FAILED,
  DELETE_RESTAURANT_LOADING,
  DELETE_RESTAURANT_SUCCESS,
} from '../Type';

export const DeleteRestaurantAction = _id => {
  return async dispatch => {
    dispatch({
      type: DELETE_RESTAURANT_LOADING,
      payload: _id,
    });

    try {
      let config = {
        method: 'delete',
        url: ` https://uncertainty-laboratory-mel-springfield.trycloudflare.com/api/restaurant/deleteRestaurant/${_id}`,
        headers: {
          'Content-Type': 'application/json',
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
