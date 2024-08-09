import {View, Text, TextInput} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction } from '../../../redux/Action/LoginAction';

const Screen4 = () => {

// const dispatch = useDispatch();
// const Login = useSelector(state => state.Register.Login.data);
// console.log(Login, 'Login4');

// useEffect(() => {
//   dispatch(LoginAction());
// }, []);

  return (
    <View>
      <View style={{borderWidth: 1, height: 50}}></View>
      <View style={{borderWidth: 1, marginHorizontal: 10, }}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <View style={{borderWidth: 1, height: 100,width:100,borderRadius:60}}></View>
        </View>
        <View style={{borderWidth:1}}>
         <Text>name</Text>
         <Text>name</Text>
         <Text>name</Text>
         <Text>name</Text>
         <Text>name</Text>
         <Text>name</Text>
        </View>

      </View>
    </View>
  );
};

export default Screen4;
