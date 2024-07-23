import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RegisterAction } from '../../redux/Action/RegisterAction';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSignUp = async () => {
    dispatch(RegisterAction(name, email, password,navigation));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>SignUp</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
        <TextInput
          placeholder="Enter Name"
          style={{ borderBottomWidth: 1, width: '80%' }}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Email"
          style={{ borderBottomWidth: 1, width: '80%' }}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          style={{ borderBottomWidth: 1, width: '80%' }}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              width: '80%',
              marginTop: 50,
              padding: 10,
              paddingHorizontal: 30,
            }}
            onPress={handleSignUp}
          >
            <Text>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
