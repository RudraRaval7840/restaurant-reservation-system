import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { VerifyOtpAction } from '../../redux/Action/VerifyOtpAction';

const VerifyOtp = ({ navigation }) => {
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    // Dispatch the VerifyOtpAction
    dispatch(VerifyOtpAction(otp, navigation));
    // Navigate to the next screen with the otp value
    navigation.navigate('ResetPassword', { otp });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>Otp Screen</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          placeholder="Enter OTP"
          maxLength={4}
          style={{ borderBottomWidth: 1, width: '80%', textAlign: 'center' }}
          value={otp}
          onChangeText={setOtp}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={{
            padding: 15,
            borderWidth: 1,
            width: '80%',
            marginTop: 40,
            alignItems: 'center',
          }}
          onPress={handleSubmit}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyOtp;
