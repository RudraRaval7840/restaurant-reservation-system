import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AvailableBooks } from './AAPI-Link';
import { GET_ALL_RESTAURANT_FAILED, GET_ALL_RESTAURANT_LOADING, GET_ALL_RESTAURANT_SUCCESS } from '../Type';

export const AllRestaurentAction = () => {
  return async dispatch => {
    dispatch({
      type: GET_ALL_RESTAURANT_LOADING,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      let config = {
        method: 'get',
        url: AvailableBooks,
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      };
      //   console.log('config AvailableBooks ---->>', config);

      axios
        .request(config)
        .then(response => {
          console.log('Get All Restaurent Data    >>>>', response.data);
          //   console.log('token===', token);
          dispatch({
            type: GET_ALL_RESTAURANT_SUCCESS,
            payload: response.data.availableBook,
          });
        })
        .catch(error => {
          console.log('Get Restaurent Data failed ===>>>', error);
          dispatch({
            type: GET_ALL_RESTAURANT_FAILED,
            payload: {
              error: 'Something went wrong, please try again later.',
            },
          });
        });
    } catch (error) {
      console.log('Get Restaurent Data failed', error);
      dispatch({
        type: GET_ALL_RESTAURANT_FAILED,
        payload: {
          error: 'Something went wrong, please try again later.',
        },
      });
    }
  };
};
