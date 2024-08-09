import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { GET_ALL_USER_FAILED, GET_ALL_USER_LOADING, GET_ALL_USER_SUCCESS } from '../Type';
import { GetAllUser } from './All_API_DATA';

export const GetAllUserAction = () => {
  return async dispatch => {
    dispatch({
      type: GET_ALL_USER_LOADING,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      let config = {
        method: 'get',
        url: GetAllUser,
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      };
      //   console.log('config AvailableBooks ---->>', config);

      axios
        .request(config)
        .then(response => {
          console.log('Get All USER Data    >>>>', response.data);
          //   console.log('token===', token);
          dispatch({
            type: GET_ALL_USER_SUCCESS,
            payload: response.data,
          });
        })
        .catch(error => {
          console.log('Get USER Data failed ===>>>', error);
          dispatch({
            type: GET_ALL_USER_FAILED,
            payload: {
              error: 'Something went wrong, please try again later.',
            },
          });
        });
    } catch (error) {
      console.log('Get USER Data failed', error);
      dispatch({
        type: GET_ALL_USER_FAILED,
        payload: {
          error: 'Something went wrong, please try again later.',
        },
      });
    }
  };
};
