import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Reservation } from './All_API_DATA';
import { GET_ALL_RESERVATION_FAILED, GET_ALL_RESERVATION_LOADING, GET_ALL_RESERVATION_SUCCESS } from '../Type';

export const AllReservationAction = () => {
  return async dispatch => {
    dispatch({
      type: GET_ALL_RESERVATION_LOADING,
    });
    try {
      // const token = await AsyncStorage.getItem('token');
      let config = {
        method: 'get',
        url: Reservation,
        headers: {
          'Content-Type': 'application/json',
          // authorization: `Bearer ${token}`,
        },
      };
      //   console.log('config AvailableBooks ---->>', config);

      axios
        .request(config)
        .then(response => {
          console.log('Get All Restaurent Data    >>>>', response.data);
          //   console.log('token===', token);
          dispatch({
            type: GET_ALL_RESERVATION_SUCCESS,
            payload: response.data,
          });
        })
        .catch(error => {
          console.log('Get Restaurent Data failed *==>>>', error);
          dispatch({
            type: GET_ALL_RESERVATION_FAILED,
            payload: {
              error: 'Something went wrong, please try again later.',
            },
          });
        });
    } catch (error) {
      console.log('Get Restaurent Data failed', error);
      dispatch({
        type: GET_ALL_RESERVATION_FAILED,
        payload: {
          error: 'Something went wrong, please try again later.',
        },
      });
    }
  };
};
