import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AdminRestaurantDetails = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 50,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity style={{position: 'absolute', left: 10}}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={{fontSize: 20}}>RestaurantDetails</Text>
      </View>
      <View style={{flex: 1, marginHorizontal: 10, borderWidth: 1}}>
        <View style={{justifyContent: 'center',flex:1}}>
          <View style={{borderWidth: 1}}>
            <Text style={styles.heading}>Name</Text>
            <Text style={{fontSize: 20}}>RestaurantName</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    heading:{
fontSize:15
    }
})
export default AdminRestaurantDetails;
