import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ApprovedRejected } from './All_API_DATA';
import { APPROVED_REJECTED_FAILED, APPROVED_REJECTED_LOADING, APPROVED_REJECTED_SUCCESS } from '../Type';
import { Alert } from 'react-native';

export const ApproveRejectAction = (action, _id,rejectionText) => {
  return async dispatch => {
    dispatch({
      type: APPROVED_REJECTED_LOADING,
    });

    try {
      const token = await AsyncStorage.getItem('token');
// requestId, action, rejectionReason
      const data = JSON.stringify({
        action: action,
        requestId: _id,
        rejectionReason: rejectionText,
      });
console.log('data====>>',data);

      const config = {
        method: 'post',
        url:ApprovedRejected,
        data: data,
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      };

      console.log('Approved, Rejected --------====>config', config);

      axios
        .request(config)
        .then(response => {
          console.log('Approved, Rejected Data<<<<<<<=====>', response.data);
          dispatch({
            type: APPROVED_REJECTED_SUCCESS,
            payload: response.data,
          });
          Alert.alert('Success', 'Request has been approved.');
        })

        .catch(error => {
          console.log('Approved, Rejected failed', error);
          dispatch({
            type: APPROVED_REJECTED_FAILED,
            payload: {
              error: 'Something went wrong, please try again later.',
            },
          });
          // Alert.alert('Rejected', 'Request has been approved.');

        });
    } catch (error) {
      console.log('Approved, Rejected failed', error);
      dispatch({
        type: APPROVED_REJECTED_FAILED,
        payload: {
          error: 'Something went wrong, please try again later.',
        },
      });
    }
  };
};
