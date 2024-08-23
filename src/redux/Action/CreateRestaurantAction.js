import axios from 'axios';
import {CreateRestaurant,i} from './All_API_DATA';
import {
  CREATE_RESTAURANT_FAILED,
  CREATE_RESTAURANT_LOADING,
  CREATE_RESTAURANT_SUCCESS,
} from '../Type';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CreateRestaurantAction = (name, address, contact,image,city,area,navigation) => {
  return async dispatch => {
    dispatch({
      type: CREATE_RESTAURANT_LOADING,
    });

    try {
      const data = {
        RestaurantName: name,
        Address: address,
        Contact: contact,
        image: image,
        City:city,
        Area:area
      };
      const token = await AsyncStorage.getItem('token');
    
      const config = {
        method: 'post',
        url: CreateRestaurant,
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        data: JSON.stringify(data),
      };

      const response = await axios.request(config);

      console.log('fORGOT Data ====>', response.data);

      dispatch({
        type: CREATE_RESTAURANT_SUCCESS,
        payload: response.data,
      });

      navigation.navigate('AdminHomeScreen');

      return response.data;
    } catch (error) {
      console.log('CreateRestaurant:', error);

      dispatch({
        type: CREATE_RESTAURANT_FAILED,
        payload: {
          error: error.message || 'Failed to sign up',
        },
      });

      throw error;
    }
  };
};
