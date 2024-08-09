import axios from 'axios';
import { LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS } from '../Type';
import { LoginApi } from './All_API_DATA';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginAction = (email, password, navigation) => {
  return async dispatch => {
    dispatch({
      type: LOGIN_LOADING,
    });

    try {
      const data = {
        email: email,
        password: password,
        // email: 'rudraraval5484@gmail.com',
        // password: '123',
      };
      
      const config = {
        method: 'post',
        url: LoginApi,
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(data),
      };
      console.log(config,'data');

      const response = await axios.request(config);

      console.log('Login Data ====>', response.data);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });

      if (
        response.data.error &&
        response.data.message === 'Book already exists'
      ) {
        throw new Error('Book already exists');
      }

      await AsyncStorage.setItem('token', response.data.accessToken);

      const role = response.data.data.role;
      console.log(role, '33333');

      if (role === 'admin') {
        navigation.navigate('AdminHomeScreen');
      } else {
        navigation.navigate('UserHomeScreen');
      }

      return response.data;
    } catch (error) {
      console.log('Error during login:', error);

      dispatch({
        type: LOGIN_FAILED,
        payload: {
          error: error.message || 'Failed to login',
        },
      });

      throw error;
    }
  };
};
