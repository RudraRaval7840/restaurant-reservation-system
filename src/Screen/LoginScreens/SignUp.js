import { View, Text, TextInput, TouchableOpacity, Alert, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RegisterAction } from '../../redux/Action/RegisterAction';
import ImagePicker from 'react-native-image-crop-picker';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const dispatch = useDispatch();

  const handleSignUp = async () => {
    dispatch(RegisterAction(name, email, password, profileImage, navigation));
  };

  const handleSelectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      console.log(image,"lkklkl")
      setProfileImage(image.data);  // set base64 string here
    }).catch(error => {
      if (error.code !== 'E_PICKER_CANCELLED') {
        Alert.alert('Error', 'Failed to pick image');
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.form}>
        <TouchableOpacity onPress={handleSelectImage}>
          <View style={styles.imagePicker}>
            {profileImage ? (
              <Image source={{ uri: `data:image/jpeg;base64,${profileImage}` }} style={styles.image} />
            ) : (
              <Text>Select Image</Text>
            )}
          </View>
        </TouchableOpacity>
        <TextInput
          placeholder="Enter Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePicker: {
    borderWidth: 1,
    height: 100,
    width: 100,
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  input: {
    borderBottomWidth: 1,
    width: '80%',
    marginTop: 20,
  },
  button: {
    borderWidth: 1,
    width: '80%',
    marginTop: 50,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default SignUp;
