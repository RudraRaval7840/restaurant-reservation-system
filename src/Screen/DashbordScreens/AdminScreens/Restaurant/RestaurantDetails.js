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
      <View style={styles.content}>
        <Image source={{uri: restaurant.image}} style={styles.image} />
        <View style={styles.detailsContainer}>
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
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  detailsContainer: {
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
  },
  tableCount: {
    fontSize: 18,
    fontWeight: '600',
    color: '#777',
    marginTop: 5,
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
});

export default RestaurantDetails;
