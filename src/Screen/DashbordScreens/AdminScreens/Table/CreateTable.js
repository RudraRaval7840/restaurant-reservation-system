import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import { CreateTableAction } from '../../../../redux/Action/CreateTableAction';
import { AllRestaurentAction } from '../../../../redux/Action/GetAllRestaurentAction';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CreateTable = ({ navigation }) => {
  const [tableNumber, setTableNumber] = useState('');
  const [restaurantId, setRestaurantId] = useState(null);
  const [capacity, setCapacity] = useState('');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);

  const dispatch = useDispatch();
  const restaurants = useSelector(state => state.AllRestaurentReducer.AllRestaurent.data);

  useEffect(() => {
    dispatch(AllRestaurentAction());
  }, [dispatch]);

  useEffect(() => {
    if (restaurants) {
      setItems(
        restaurants.map((restaurant) => ({
          label: restaurant.RestaurantName,
          value: restaurant._id,
        }))
      );
    }
  }, [restaurants]);

  const handleSubmit = async () => {
    if (!tableNumber || !restaurantId || !capacity) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }
    dispatch(CreateTableAction(tableNumber, restaurantId, capacity, navigation));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create Table</Text>
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => navigation.navigate('CreateRestaurent')}
        >
          <Ionicons name="add" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Table Number"
          style={styles.input}
          value={tableNumber}
          onChangeText={setTableNumber}
        />
        <TextInput
          placeholder="Capacity of People"
          style={styles.input}
          value={capacity}
          onChangeText={setCapacity}
          keyboardType="numeric"
        />
        <DropDownPicker
          open={open}
          value={restaurantId}
          items={items}
          setOpen={setOpen}
          setValue={setRestaurantId}
          setItems={setItems}
          placeholder="Select a restaurant"
          containerStyle={styles.pickerContainer}
          style={styles.picker}
          dropDownContainerStyle={styles.dropDownPicker}
          listItemLabelStyle={styles.listItemLabel}
          placeholderStyle={styles.placeholder}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
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
    height: 60,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  iconButton: {
    padding: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  formContainer: {
    padding: 15,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: '#fff',
    zIndex: 1000,
  },
  picker: {
    height: 50,
    borderWidth: 0,
  },
  dropDownPicker: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    zIndex: 1000, 
  },
  listItemLabel: {
    color: '#000',
    textAlign: 'left',
  },
  placeholder: {
    color: '#999',
    textAlign: 'left',
  },
  submitButton: {
    marginVertical: 20,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CreateTable;
