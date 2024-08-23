import axios from 'axios';
import {requestResturant} from './All_API_DATA';
import {
  ADD_REQUEST_RESTAURANT_FAILED,
  ADD_REQUEST_RESTAURANT_LOADING,
  ADD_REQUEST_RESTAURANT_SUCCESS,
} from '../Type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const AddRequestRestaurantAction = (
  name,
  address,
  contact,
  image,
  city,
  area,
  userId, // Add userId parameter
  navigation,
) => {
  return async dispatch => {
    dispatch({type: ADD_REQUEST_RESTAURANT_LOADING});

    try {
      const data = {
        RestaurantName: name,
        Address: address,
        Contact: contact,
        image: image,
        City: city,
        Area: area,
        createdBy: userId, // Include userId in the request data
      };

      const token = await AsyncStorage.getItem('token');

      if (!token) {
        throw new Error('No token found. Please log in again.');
      }

      const config = {
        method: 'post',
        url: requestResturant,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: data, // No need to stringify, axios handles it
      };

      const response = await axios.request(config);

      dispatch({
        type: ADD_REQUEST_RESTAURANT_SUCCESS,
        payload: response.data,
      });

      Alert.alert('Success', 'Request sent successfully');

      if (navigation) {
        navigation.navigate('UserHomeScreen');
      }

      return response.data;
    } catch (error) {
      console.error('CreateRestaurant error:', error);

      dispatch({
        type: ADD_REQUEST_RESTAURANT_FAILED,
        payload: {
          error: error.response?.data?.message || error.message || 'Failed to submit request',
        },
      });

      Alert.alert('Error', 'Failed to submit request. Please try again later.');
      
      throw error;
    }
  };
};
