import axios from 'axios';
import { RegisterApi } from './All_API_DATA';
import { REGISTER_FAILED, REGISTER_LOADING, REGISTER_SUCCESS } from '../Type';

export const RegisterAction = (name, email, password, navigation) => {
  return async dispatch => {
    dispatch({
      type: REGISTER_LOADING,
    });

    try {
      const data = {
        username: name,
        email: email,
        password: password,
      };

      const config = {
        method: 'post',
        url: RegisterApi,
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(data),
      };

      const response = await axios.request(config);

      console.log('Sign-Up Data ====>', response.data);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
      });

      // Navigate to the Login screen
      navigation.navigate('Login');

      return response.data;
    } catch (error) {
      console.log('Error during sign-up:', error);

      dispatch({
        type: REGISTER_FAILED,
        payload: {
          error: error.message || 'Failed to sign up',
        },
      });

      throw error;
    }
  };
};
