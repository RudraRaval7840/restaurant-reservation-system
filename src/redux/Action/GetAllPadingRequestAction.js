import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { REQUEST_RESTAURANT_PENDING_FAILED, REQUEST_RESTAURANT_PENDING_LOADING, REQUEST_RESTAURANT_PENDING_SUCCESS } from '../Type';
import { PaddingResturantRequest } from './All_API_DATA';

export const GetAllPadingRequestAction = () => {
  return async dispatch => {
    dispatch({
      type: REQUEST_RESTAURANT_PENDING_LOADING,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      let config = {
        method: 'get',
        url: PaddingResturantRequest,
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      };
      //  console.log('config AvailableBooks ---->>', config)pateltirth220

      axios
        .request(config)
        .then(response => {
          // console.log('Get All Restaurent Data    >>>>', response.data.data);
          //   console.log('token===', token);
          dispatch({
            type: REQUEST_RESTAURANT_PENDING_SUCCESS,
            payload: response.data,
          });
        })
        .catch(error => {
          console.log('Get Restaurent Data failed *==>>>', error);
          dispatch({
            type: REQUEST_RESTAURANT_PENDING_FAILED,
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
