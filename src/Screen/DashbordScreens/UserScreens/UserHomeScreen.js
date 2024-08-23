import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {GetMyRestaurantAction} from '../../../redux/Action/GetMyRestaurantAction';

const UserHomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const GetMyRestaurant = useSelector(
    state => state.getMyRestaurant?.GetMyRestaurant?.data || [],
  );
  console.log('MyRestaurant ==>>>>', GetMyRestaurant);

  useEffect(() => {
    dispatch(GetMyRestaurantAction());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {GetMyRestaurant.length > 0 ? (
          <Text style={styles.headerText}>My Restaurant</Text>
        ) : (
          <>
            <TouchableOpacity
              style={{position: 'absolute', left: 10}}
              onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Create Restaurant</Text>
          </>
        )}
      </View>

      <View style={styles.contentContainer}>
        {GetMyRestaurant.length > 0 ? (
          // <FlatList
          //   data={GetMyRestaurant}
          //   keyExtractor={item => item._id.toString()}
          //   renderItem={({ item }) => (
          //     <View style={styles.restaurantItem}>
          //       <Text style={styles.restaurantName}>{item.Address}</Text>
          //       <Text style={styles.restaurantDetails}>{item.Contact}</Text>
          //     </View>
          //   )}
          // />
          <View>
            <Text>dsf</Text>
            <View
              style={{
                borderWidth: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '60%',
                alignSelf: 'center',
                
              }}>
              <Text>Create Table</Text>
              <Text>sgdfg</Text>
            </View>
          </View>
        ) : (
          <View style={styles.content}>
            <Text style={styles.title}>
              Do you want to create a Restaurant?
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('AddRequestRestaurant')}>
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonNope]}
                onPress={() => navigation.navigate('SplashScreen')}>
                <Text style={[styles.buttonText, styles.buttonNopeText]}>
                  Nope!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  headerText: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 20,
  },
  content: {
    width: '80%',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  buttonNope: {
    backgroundColor: '#FF3B30',
  },
  buttonNopeText: {
    color: '#FFFFFF',
  },
  restaurantItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  restaurantDetails: {
    fontSize: 14,
    color: '#777777',
  },
});

export default UserHomeScreen;
