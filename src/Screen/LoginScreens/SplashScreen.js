import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const SplashScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', marginHorizontal: 20}}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../assets/Image/splash.png')}
          style={{height: 280, width: 350}}
        />
        <Text>Book Your Table</Text>

        <TouchableOpacity
          style={{padding: 15, borderWidth: 1, width: '80%', marginBottom: 10}}
          onPress={() => navigation.navigate('Login')}>
          <Text>LogIn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{padding: 15, borderWidth: 1, width: '80%'}}
          onPress={() => navigation.navigate('SignUp')}>
          <Text>SignUp</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
       style={{alignItems: 'flex-end', padding: 20}} 
       onPress={() => navigation.navigate('UserHomeScreen')}>
      
        <Text style={{color: 'blue', fontSize: 17}}>Register Restaurant ?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;
