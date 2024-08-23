import axios from 'axios';
import {
  CREATE_TABLE_FAILED,
  CREATE_TABLE_LOADING,
  CREATE_TABLE_SUCCESS,
} from '../Type';
import {CreateTable} from './All_API_DATA';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CreateTableAction = (tableNumber, id, capacity,navigation) => {
  return async dispatch => {
    dispatch({
      type: CREATE_TABLE_LOADING,
    });

    try {
      const data = {
        tableNumber: tableNumber,
        restaurantId: id,
        capacity: capacity,
      };
      const token = await AsyncStorage.getItem('token');

      console.log('CreateTableA Data ====>', data);
      const config = {
        method: 'post',
        url: CreateTable,
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,

        },
        data: JSON.stringify(data),
      };

      const response = await axios.request(config);

      console.log('CreateTableA Data ====>', response.data);

      dispatch({
        type: CREATE_TABLE_SUCCESS,
        payload: response.data,
      });

      navigation.navigate('AdminHomeScreen');

      return response.data;
    } catch (error) {
      console.log('CreateTable:', error);

      dispatch({
        type: CREATE_TABLE_FAILED,
        payload: {
          error: error.message || 'Failed to sign up',
        },
      });

      throw error;
    }
  };
};
