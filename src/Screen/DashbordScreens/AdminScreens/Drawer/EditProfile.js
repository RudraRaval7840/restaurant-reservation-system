import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import {useRoute, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {updateUserAction} from '../../../../redux/Action/UserEditAction';
import ImagePicker from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EditProfile = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {profiledata} = route.params;
  // const dob = profiledata.DOB.slice(0, 10);
  const [username, setUsername] = useState(profiledata?.username || '');
  const [email, setEmail] = useState(profiledata?.email || '');
  const [DOB, setDOB] = useState(profiledata.DOB || '');
  const [city, setCity] = useState(profiledata?.City || '');
  const [area, setArea] = useState(profiledata?.Area || '');
  const [gender, setGender] = useState(profiledata?.Gender || '');
  const [image, setImage] = useState(profiledata?.image || '');

  const genderOptions = [
    {id: 'Male', label: 'Male', value: 'Male'},
    {id: 'Female', label: 'Female', value: 'Female'},
  ];

  const handleSave = () => {
    console.log('Updated Data:', {
      username,
      email,
      DOB,
      city,
      area,
      gender,
      image,
    });
    dispatch(updateUserAction(username, email, DOB, city, area, gender, image));
    navigation.goBack();
  };

  const handleGenderChange = newGender => {
    setGender(newGender);
  };

  const handleImagePick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true,
    })
      .then(image => {
        const base64Image = `data:${image.mime};base64,${image.data}`;
        setImage(base64Image);
      })
      .catch(error => {
        if (error.code !== 'E_PICKER_CANCELLED') {
          Alert.alert('Error', 'Failed to pick image');
        }
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: 10}}>
          <Ionicons name="arrow-back-sharp" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </View>
      <View style={styles.formSection}>
        <TouchableOpacity onPress={handleImagePick}>
          <Image source={{uri: image}} style={styles.image} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="YYYY-MM-DD"
          value={DOB}
          onChangeText={setDOB}
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          value={city}
          onChangeText={setCity}
        />
        <TextInput
          style={styles.input}
          placeholder="Area"
          value={area}
          onChangeText={setArea}
        />
        <View style={styles.radioGroupContainer}>
          <Text style={styles.radioGroupLabel}>Gender</Text>
          <RadioGroup
            radioButtons={genderOptions}
            onPress={handleGenderChange}
            selectedId={gender}
            containerStyle={{flexDirection: 'row'}}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#f8f9fa',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
  },
  formSection: {
    margin: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f0f0f0',
  },
  radioGroupContainer: {
    marginBottom: 15,
  },
  radioGroupLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    alignSelf: 'center',
  },
});

export default EditProfile 