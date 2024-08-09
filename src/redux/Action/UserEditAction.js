import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {USER_EDIT_FAILED, USER_EDIT_LOADING, USER_EDIT_SUCCESS} from '../Type';

export const updateUserAction = (
  username,
  email,
  DOB,
  city,
  area,
  gender,
  image,
) => {
  return async dispatch => {
    dispatch({
      type: USER_EDIT_LOADING,
    });

    try {
      const token = await AsyncStorage.getItem('token');

      let data = JSON.stringify({
        username: username,
        email: email,
        DOB: DOB,
        City: city,
        Area: area,
        Gender: gender,
        image: image,
      });
      let config = {
        method: 'put',
        url: ` https://uncertainty-laboratory-mel-springfield.trycloudflare.com/api/user/edit-profile`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: data,
      };
      const response = await axios.request(config);
      console.log('API Response:', response.data);
      if (response.data.token) {
        await AsyncStorage.setItem('token', response.data.token);
        console.log('Stored Token:', response.data.token);
      }

      dispatch({
        type: USER_EDIT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log('Update user failed', error);
      dispatch({
        type: USER_EDIT_FAILED,
        payload: {
          error: 'Something went wrong, please try again later.',
        },
      });
    }
  };
};
