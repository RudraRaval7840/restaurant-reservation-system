import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RestaurantDetails = ({route, navigation}) => {
  const {restaurant} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Restaurant Name</Text>
      </View>
      <View style={{paddingHorizontal: 15}}>
        <Image source={{uri: restaurant.image}} style={styles.image} />
        <View style={{marginVertical: 15}}>
          <Text style={styles.name}>{restaurant.RestaurantName}</Text>
          <Text style={styles.tableCount}>Tables: {restaurant.tableCount}</Text>
        </View>

        <FlatList
          data={restaurant.tables}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <View style={styles.tableContainer}>
              <Text style={styles.tableText}>
                Table Number: {item.tableNumber}
              </Text>
              <Text style={styles.tableText}>Capacity: {item.capacity}</Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No tables available</Text>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 15,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    // marginBottom: 15,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    // marginBottom: 10,
    // textAlign: 'center',
  },
  address: {
    fontSize: 18,
    marginBottom: 5,
    // textAlign: 'center',
    color: '#555',
  },
  contact: {
    fontSize: 18,
    marginBottom: 5,
    // textAlign: 'center',
    color: '#555',
  },
  tableCount: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginVertical: 10,
    // textAlign: 'center',
  },
  tableContainer: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  tableText: {
    fontSize: 16,
    color: '#333',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 15,
  },
  backButton: {
    position: 'absolute',
    left: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default RestaurantDetails;
