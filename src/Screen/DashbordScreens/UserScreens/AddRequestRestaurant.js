import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AddRequestRestaurantAction} from '../../../redux/Action/AddRequestRestaurantAction';

const CreateRestaurent = ({navigation}) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [contact, setContact] = useState('');
  const [image, setImage] = useState(null);
  const [userData, setUserData] = useState(null); // State to store user data

  const dispatch = useDispatch();
console.log(userData,"userData");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('loginData');
        if (storedData) {
          setUserData(JSON.parse(storedData));
        }
      } catch (error) {
        console.log('Error retrieving data from AsyncStorage:', error);
      }
    };

    fetchData(); // Fetch the stored data when the component mounts
  }, []);

  const handleAddRestaurant = async () => {
    if (!name || !address || !contact || !city || !area || !image) {
      Alert.alert('Error', 'Please fill all fields and select an image.');
      return;
    }

    dispatch(
      AddRequestRestaurantAction(
        name,
        address,
        contact,
        image,
        city,
        area,
        userData?.data?._id,
        navigation,
      ),
    );
  };

  const handleImageSelect = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    })
      .then(image => {
        setImage(image.data);
      })
      .catch(error => {
        console.log('Error picking image: ', error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text>Add Restaurant Request</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Add Restaurant Request</Text>

        <TouchableOpacity
          style={styles.imageContainer}
          onPress={handleImageSelect}>
          {image ? (
            <Image
              source={{uri: `data:image/jpeg;base64,${image}`}}
              style={styles.image}
            />
          ) : (
            <Text style={styles.imagePlaceholder}>Select an image</Text>
          )}
        </TouchableOpacity>

        {/* Displaying User Data */}
        {userData && (
          <View style={styles.userDataContainer}>
            <Text style={styles.userDataText}>User ID: {userData.data._id}</Text>
          </View>
        )}

        <TextInput
          style={styles.input}
          placeholder="Enter Restaurant Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Restaurant Contact"
          value={contact}
          onChangeText={setContact}
          keyboardType="phone-pad"
          maxLength={10}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Restaurant Address"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Restaurant City"
          value={city}
          onChangeText={setCity}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Restaurant Area"
          value={area}
          onChangeText={setArea}
        />
        <Button title="Add" onPress={handleAddRestaurant} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  imageContainer: {
    height: 120,
    width: 120,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0e0e0',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  imagePlaceholder: {
    color: '#888',
  },
  userDataContainer: {
    marginBottom: 15,
  },
  userDataText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateRestaurent;
