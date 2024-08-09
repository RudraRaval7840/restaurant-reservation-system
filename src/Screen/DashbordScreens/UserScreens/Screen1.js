import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PopularRestaurantAction} from '../../../redux/Action/PopularRestaurantAction';

const Screen1 = () => {
  const dispatch = useDispatch();

  const Login = useSelector(state => state.Register.Login.data);
  console.log(Login, 'Login1');
  useEffect(() => {
    dispatch(PopularRestaurantAction());
  }, [dispatch]);
  const restaurants = useSelector(
    state => state.PopularRestaurant.PopularRestaurant.data,
  );

  const renderItem = ({item}) => (
    <View style={styles.restaurantContainer}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.RestaurantName}</Text>
        <Text style={styles.address}>{item.Address}</Text>
        <Text style={styles.contact}>Contact: {item.Contact}</Text>
        <Text style={styles.city}>City: {item.city}</Text>
        <Text style={styles.city}>Area: {item.Area}</Text>
        <TouchableOpacity style={{position: 'absolute', right: 10, top: 10}}>
          <Ionicons name="heart-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Text style={{fontWeight: 'bold', fontSize: 20}}>{Login}</Text> */}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Text style={styles.headerTitle}>Popular Restaurant</Text>
        <Ionicons name="search" size={30} color="black" />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    // flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 15,
    // backgroundColor: '#fff',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    // elevation: 5,
    borderWidth: 1,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  restaurantContainer: {
    // borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  imageContainer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#eaeaea',
  },
  infoContainer: {
    width: '70%',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 16,
    color: '#555',
    marginTop: 2,
  },
  contact: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  city: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  listContent: {
    paddingBottom: 20,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default Screen1;
