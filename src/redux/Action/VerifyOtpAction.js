import axios from 'axios';
import { VerifyOtp } from './All_API_DATA';
import { VERIFY_OTP_FAILED, VERIFY_OTP_LOADING, VERIFY_OTP_SUCCESS } from '../Type';

export const VerifyOtpAction = (otp, navigation) => {
  return async dispatch => {
    dispatch({
      type: VERIFY_OTP_LOADING,
    });

    try {
      const data = {
        otp: otp,
      };

      const config = {
        method: 'post',
        url: VerifyOtp,
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(data),
      };

      const response = await axios.request(config);

      console.log('fORGOT Data ====>', response.data);

      dispatch({
        type: VERIFY_OTP_SUCCESS,
        payload: response.data,
      });

      navigation.navigate('ResetPassword'); 

      return response.data;
    } catch (error) {
      console.log('Error during OTP verification:', error);

      dispatch({
        type: VERIFY_OTP_FAILED,
        payload: {
          error: error.message || 'Failed to verify OTP',
        },
      });

      throw error;
    }
  };
};
