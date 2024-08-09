import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SHOW_PROFILE_DATA_FAILED, SHOW_PROFILE_DATA_LOADING, SHOW_PROFILE_DATA_SUCCESS } from '../Type';
import {ShowProfileData } from './All_API_DATA';

export const ShowProfileDataAction = () => {
  return async dispatch => {
    dispatch({
      type: SHOW_PROFILE_DATA_LOADING,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      let config = {
        method: 'get',
        url: ShowProfileData,
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      };
        // console.log('config ShowProfileData ---->>', config);

      axios
        .request(config)
        .then(response => {
          console.log('ShowProfileData Data    >>>>', response.data);
          //   console.log('token===', token);
          dispatch({
            type: SHOW_PROFILE_DATA_SUCCESS,
            payload: response.data,
          });
        })
        .catch(error => {
          console.log('ShowProfileData failed ===>>>', error);
          dispatch({
            type: SHOW_PROFILE_DATA_FAILED,
            payload: {
              error: 'Something went wrong, please try again later.',
            },
          });
        });
    } catch (error) {
      console.log('ShowProfileData failed', error);
      dispatch({
        type: SHOW_PROFILE_DATA_FAILED,
        payload: {
          error: 'Something went wrong, please try again later.',
        },
      });
    }
  };
};
