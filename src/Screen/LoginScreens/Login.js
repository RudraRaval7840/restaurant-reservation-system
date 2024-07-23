import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {LoginAction} from '../../redux/Action/LoginAction';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(LoginAction(email, password, navigation));
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Login</Text>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}>
        <TextInput
          placeholder="Enter Email"
          style={{borderBottomWidth: 1, width: '80%'}}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          style={{borderBottomWidth: 1, width: '80%'}}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <View style={{width: '80%', marginTop: 50}}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={{textAlign: 'left'}}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              width: '80%',
              marginTop: 50,
              padding: 10,
              paddingHorizontal: 30,
            }}
            onPress={handleLogin}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
