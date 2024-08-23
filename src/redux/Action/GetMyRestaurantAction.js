import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GET_MY_RESTAURANT_FAILED,
  GET_MY_RESTAURANT_LOADING,
  GET_MY_RESTAURANT_SUCCESS,
} from '../Type';
import { GetMyRestaurant } from './All_API_DATA';

export const GetMyRestaurantAction = () => {
  return async dispatch => {
    dispatch({
      type: GET_MY_RESTAURANT_LOADING,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      let config = {
        method: 'get',
        url: GetMyRestaurant,
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      };
// console.log('1111111111',Response.data.data);

      axios
        .request(config)
        .then(response => {
          dispatch({
            type: GET_MY_RESTAURANT_SUCCESS,
            payload: response.data,
          });
        })
        .catch(error => {
          console.log('Get Restaurent Data failed *==>>>', error);
          dispatch({
            type: GET_MY_RESTAURANT_FAILED,
            payload: {
              error: 'Something went wrong, please try again later.',
            },
          });
        });
    } catch (error) {
      console.log('Get Restaurent Data failed', error);
      dispatch({
        type: GET_MY_RESTAURANT_FAILED,
        payload: {
          error: 'Something went wrong, please try again later.',
        },
      });
    }
  };
};
