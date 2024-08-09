import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AllReservationAction } from '../../../redux/Action/AllReservationAction';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';

const AdminHomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const sections = [
    {
      id: 1,
      title: 'Restaurant',
      img: require('../../../assets/Image/restarent.png'),
      screen: 'ShowAllRestaurant',
    },
    {
      id: 2,
      title: 'Create Table',
      img: require('../../../assets/Image/table.png'),
      screen: 'CreateTable',
    },
    {
      id: 3,
      title: 'User',
      img: require('../../../assets/Image/user.png'),
      screen: 'User',
    },
  ];

  const profile = [
    {
      id: 1,
      title: 'Profile',
      screen: 'Profile',
    },
  ];

  const dispatch = useDispatch();

  const allReservations = useSelector(
    state => state.reservation.Reservation.data?.data || []
  );
  const allCount = useSelector(
    state => state.reservation.Reservation.TotalReservaation
  );
  console.log(allCount, 'allCount');
  
  const profiledata = useSelector(
    state => state.Register.Login.data,
  );
  console.log(profiledata, 'profile5678976data');
  useEffect(() => {
    dispatch(AllReservationAction());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            source={{uri: profiledata.image}}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{profiledata.username}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.sectionContainer}>
          <FlatList
            numColumns={3}
            columnWrapperStyle={styles.columnWrapper}
            data={sections}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.sectionItem}
                onPress={() => navigation.navigate(item.screen)}
              >
                <Image source={item.img} style={styles.image} />
                <Text style={styles.sectionTitle}>{item.title}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <View style={styles.reservationHeader}>
          <Text style={styles.reservationTitle}>
            All Reservations: {allCount}
          </Text>
          <Ionicons name="search" size={30} color="gray" />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={allReservations}
          keyExtractor={item => item._id.toString()}
          renderItem={({ item }) => (
            <View style={styles.reservationItem}>
              <View style={styles.reservationInfo}>
                <Text style={styles.reservationTitleText}>{item.username}</Text>
                <Text style={styles.reservationDetailText}>
                  Number of People: {item.NumberOfPeople}
                </Text>
                <Text style={styles.reservationDetailText}>
                  Restaurant: {item.restaurantName}
                </Text>
                <Text style={styles.reservationDetailText}>
                  Address: {item.Address}
                </Text>
                <Text style={styles.reservationDetailText}>
                  Time: {item.Time}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        style={styles.modalContainer}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        backdropOpacity={0.5} 
      >
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Image
              source={{ uri: profiledata.image }}
              style={styles.profilePic}
            />
            {/* <Text style={styles.modalHeaderText}>{profiledata.username}</Text> */}
          </View>
          <FlatList
            data={profile}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.modalItem}
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate(item.screen);
                }}
              >
                <Text style={styles.modalItemText}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  content: {
    marginHorizontal: 15,
    flex: 1,
  },
  sectionContainer: {
    marginVertical: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  sectionItem: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    elevation: 2,
    flex: 1,
    marginHorizontal: 5,
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  sectionTitle: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  reservationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    alignItems: 'center',
  },
  reservationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  reservationItem: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    elevation: 2,
    padding: 10,
  },
  reservationInfo: {
    flex: 1,
  },
  reservationTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reservationDetailText: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  modalContainer: {
    margin: 0,
    justifyContent: 'center',
  },
  modalView: {
    width: '80%',
    height: '100%',
    backgroundColor: 'white',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  modalHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalItemText: {
    fontSize: 18,
    fontWeight: '600',
  },
  modalItem: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    elevation: 2,
  },
});

export default AdminHomeScreen;
