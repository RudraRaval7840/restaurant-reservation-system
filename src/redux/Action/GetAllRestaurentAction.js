import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GET_ALL_RESTAURANT_FAILED, GET_ALL_RESTAURANT_LOADING, GET_ALL_RESTAURANT_SUCCESS } from '../Type';
import { ShowAllRestaurant } from './All_API_DATA';

export const AllRestaurentAction = () => {
  return async dispatch => {
    dispatch({
      type: GET_ALL_RESTAURANT_LOADING,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      let config = {
        method: 'get',
        url: ShowAllRestaurant,
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      };
      //   console.log('config AvailableBooks ---->>', config)pateltirth220

      axios
        .request(config)
        .then(response => {
          console.log('Get All Restaurent Data    >>>>', response.data.data);
          //   console.log('token===', token);
          dispatch({
            type: GET_ALL_RESTAURANT_SUCCESS,
            payload: response.data,
          });
        })
        .catch(error => {
          console.log('Get Restaurent Data failed *==>>>', error);
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
