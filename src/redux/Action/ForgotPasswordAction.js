import axios from 'axios';
import { ForgotPassword, RegisterApi } from './All_API_DATA';
import { FORGOT_PASSWORD_FAILED, FORGOT_PASSWORD_LOADING, FORGOT_PASSWORD_SUCCESS } from '../Type';

export const ForgotPasswordAction = (email,navigation) => {
  return async dispatch => {
    dispatch({
      type: FORGOT_PASSWORD_LOADING,
    });

    try {
      const data = {
        email: email,

      };

      const config = {
        method: 'post',
        url: ForgotPassword,
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(data),
      };

      const response = await axios.request(config);

      console.log('fORGOT Data ====>', response.data);

      dispatch({
        type: FORGOT_PASSWORD_SUCCESS,
        payload: response.data,
      });

      navigation.navigate('VerifyOtp');

      return response.data;
    } catch (error) {
      console.log('Error during sign-up:', error);

      dispatch({
        type: FORGOT_PASSWORD_FAILED,
        payload: {
          error: error.message || 'Failed to sign up',
        },
      });

      throw error;
    }
  };
};
