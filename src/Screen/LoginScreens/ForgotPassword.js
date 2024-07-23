import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ForgotPasswordAction } from '../../redux/Action/ForgotPasswordAction';


const ForgotPassword = ({navigation}) => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
  
    
    const handleSendEmail = async () => {
        dispatch(ForgotPasswordAction(email,navigation));
      };
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>Forgot Password</Text>
        <View style={{ width: '80%', marginTop: 20 }}>
          <TextInput
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
            style={{ borderBottomWidth: 1, padding: 10 }}
          />
        </View>
  
        <TouchableOpacity
          style={{
            padding: 15,
            borderWidth: 1,
            width: '50%',
            marginTop: 50,
            alignItems: 'center',
          }}
          onPress={handleSendEmail}
        >
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default ForgotPassword;
  