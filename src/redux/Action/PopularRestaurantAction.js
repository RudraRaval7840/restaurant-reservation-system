import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AvailableBooks } from './AAPI-Link';
import { POPULAR_RESTAURENT_FAILED, POPULAR_RESTAURENT_LOADING, POPULAR_RESTAURENT_SUCCESS } from '../Type';
import { PopularRestaurant } from './All_API_DATA';

export const PopularRestaurantAction = () => {
  return async dispatch => {
    dispatch({
      type: POPULAR_RESTAURENT_LOADING,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      let config = {
        method: 'get',
        url: PopularRestaurant,
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      };
      //   console.log('config AvailableBooks ---->>', config);

      axios
        .request(config)
        .then(response => {
          console.log('PopularRestaurant Data    >>>>', response.data.data);
          //   console.log('token===', token);
          dispatch({
            type: POPULAR_RESTAURENT_SUCCESS,
            payload: response.data,
          });
        })
        .catch(error => {
          console.log('PopularRestaurant Data failed ===>>>', error);
          dispatch({
            type: POPULAR_RESTAURENT_FAILED,
            payload: {
              error: 'Something went wrong, please try again later.',
            },
          });
        });
    } catch (error) {
      console.log('PopularRestaurantData failed', error);
      dispatch({
        type: POPULAR_RESTAURENT_FAILED,
        payload: {
          error: 'Something went wrong, please try again later.',
        },
      });
    }
  };
};
