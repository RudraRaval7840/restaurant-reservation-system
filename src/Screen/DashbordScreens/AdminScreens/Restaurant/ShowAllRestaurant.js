import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Swipeable } from 'react-native-gesture-handler';
import { AllRestaurentAction } from '../../../../redux/Action/GetAllRestaurentAction';
import { DeleteRestaurantAction } from '../../../../redux/Action/DeleteRestaurantAction';

const ShowAllRestaurant = ({ navigation }) => {
  const dispatch = useDispatch();
  const restaurants = useSelector(state => state.AllRestaurentReducer.AllRestaurent.data);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    dispatch(AllRestaurentAction());
  }, [dispatch]);

  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, [restaurants]);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredRestaurants(restaurants);
    } else {
      setFilteredRestaurants(
        restaurants.filter(
          restaurant =>
            restaurant.RestaurantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            restaurant.Address.toLowerCase().includes(searchQuery.toLowerCase()) ||
            restaurant.Contact.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, restaurants]);

  const handleDelete = _id => {
    dispatch(DeleteRestaurantAction(_id));
  };

  const renderRightActions = (_id) => (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => handleDelete(_id)}
    >
      <Ionicons name="trash" size={30} color="white" />
    </TouchableOpacity>
  );

  const renderRestaurantItem = ({ item }) => (
    <Swipeable renderRightActions={() => renderRightActions(item._id)}>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigation.navigate('RestaurantDetails', { restaurant: item })}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.RestaurantName}</Text>
          <Text style={styles.address}>{item.Address}</Text>
          <Text style={styles.contact}>{item.Contact}</Text>
          <Text style={styles.contact}>Tables: {item.tableCount}</Text>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Show All Restaurants</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('CreateRestaurent')}
        >
          <Ionicons name="add" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search restaurants..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={filteredRestaurants}
        renderItem={renderRestaurantItem}
        keyExtractor={item => item._id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No restaurants available</Text>
        }
      />
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
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 5,
  },
  addButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  list: {
    padding: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  image: {
    width: 100,
    height: 100,
  },
  infoContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 14,
    color: '#555',
  },
  contact: {
    fontSize: 14,
    color: '#555',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: '100%',
  },
});

export default ShowAllRestaurant;
