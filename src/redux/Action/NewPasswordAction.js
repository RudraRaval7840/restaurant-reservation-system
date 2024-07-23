import axios from 'axios';
import { NewPassword } from './All_API_DATA';
import { NEW_PASSWORD_FAILED, NEW_PASSWORD_LOADING, NEW_PASSWORD_SUCCESS } from '../Type';

export const NewPasswordAction = (otp,confirmPassword,navigation) => {
  return async dispatch => {
    dispatch({
      type: NEW_PASSWORD_LOADING,
    });

    try {
      const data = {
        password:confirmPassword,
        otp: otp,

      };

      const config = {
        method: 'post',
        url: NewPassword,
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(data),
      };

      const response = await axios.request(config);

      console.log('fORGOT Data ====>', response.data);

      dispatch({
        type: NEW_PASSWORD_SUCCESS,
        payload: response.data,
      });

      navigation.navigate('Login');

      return response.data;
    } catch (error) {
      console.log('Error during sign-up:', error);

      dispatch({
        type: NEW_PASSWORD_FAILED,
        payload: {
          error: error.message || 'Failed to sign up',
        },
      });

      throw error;
    }
  };
};
