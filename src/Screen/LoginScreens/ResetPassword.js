import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NewPasswordAction } from '../../redux/Action/NewPasswordAction';

const ResetPassword = ({ navigation, route }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState(null);
  const dispatch = useDispatch();
 console.log('lll',navigation);
  useEffect(() => {
    if (route.params && route.params.otp) {
      setOtp(route.params.otp);
    } else {
      console.error('OTP not found in route params');
    }
  }, [route.params]);

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    dispatch(NewPasswordAction(otp, confirmPassword, navigation)); // Ensure NewPasswordAction accepts OTP
  };

  const isButtonDisabled = password === '' || confirmPassword === '' || password !== confirmPassword;

  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: 20 }}>Reset Password</Text>
      {otp ? (
        <Text style={{ textAlign: 'center', marginBottom: 20 }}>Received OTP: {otp}</Text>
      ) : (
        <Text style={{ textAlign: 'center', marginBottom: 20, color: 'red' }}>Error: OTP not found</Text>
      )}
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={{ borderBottomWidth: 1, width: '80%', marginBottom: 20 }}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry
          style={{ borderBottomWidth: 1, width: '80%', marginBottom: 20 }}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          style={{
            padding: 15,
            borderWidth: 1,
            width: '80%',
            marginTop: 30,
            alignItems: 'center',
            backgroundColor: isButtonDisabled ? 'grey' : 'skyblue',
            borderColor: isButtonDisabled ? 'darkgrey' : 'skyblue',
          }}
          onPress={handleSubmit}
          disabled={isButtonDisabled}
        >
          <Text style={{ color: isButtonDisabled ? 'darkgrey' : 'white' }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPassword;
