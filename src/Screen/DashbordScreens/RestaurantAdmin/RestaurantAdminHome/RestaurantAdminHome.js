import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';

const RestaurantAdminHome = ({navigation}) => {
  const RestaurantDetails = [
    {id: 1, name: 'Create Tables', screen: 'CreateTable'},
    {id: 2, name: 'Users List', screen: 'User'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('AdminRestaurantDetails')}
          style={{position:'absolute',left:10}}
          >
          <Image
            source={require('../../../../assets/Image/profile.png')}
            style={{height: 40, width: 40, borderRadius: 20}}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Restaurant Admin</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={RestaurantDetails}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => navigation.navigate(item.screen)}>
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
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
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 13,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemContainer: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default RestaurantAdminHome;
