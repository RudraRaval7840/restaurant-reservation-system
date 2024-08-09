import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoginAction } from '../../redux/Action/LoginAction';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(LoginAction(email, password, navigation));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Enter Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address" 
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => navigation.navigate('ForgotPassword')}>    
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: '#007BFF',
    fontSize: 14,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;
