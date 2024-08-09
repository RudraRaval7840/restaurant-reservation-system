import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {LoginAction} from '../../../../redux/Action/LoginAction';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ShowProfileDataAction} from '../../../../redux/Action/ShowProfileDataAction';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const profiledata = useSelector(
    state => state.ShowProfile.ShowProfile?.data || [],
  );
  console.log(profiledata, 'profiledata');

  useEffect(() => {
    dispatch(ShowProfileDataAction());
  }, [dispatch]);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AdminHomeScreen')}
          style={styles.iconButton}>
          <Ionicons name="arrow-back-sharp" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfile', {profiledata})}
          style={styles.iconButton}>
          <AntDesign name="edit" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.profileContent}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: profiledata.image}}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.profileDetails}>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Username</Text>
            <Text style={styles.value}>{profiledata.username}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{profiledata.email}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Gender</Text>
            <Text style={styles.value}>{profiledata.Gender}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Date of Birth</Text>
            <Text style={styles.value}>
              {profiledata.DOB.slice(0, 10)}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Area</Text>
            <Text style={styles.value}>{profiledata.Area}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>City</Text>
            <Text style={styles.value}>{profiledata.City}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  // i have project in react native and redux impliment all are set up and workproperly but i want yor help like when user or admin both are login first time then show login page otherwise show profile page
  // i already impliment and set up redux so i want like action ane reducer file 
  header: {
    borderWidth: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  iconButton: {
    padding: 10,
  },
  title: {
    fontSize: 25,
  },
  profileContent: {
    marginHorizontal: 15,
  },
  imageContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  profileDetails: {
    marginTop: 10,
  },
  detailRow: {
    marginVertical: 15,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  label: {
    fontSize: 15,
  },
  value: {
    fontSize: 20,
  },
});

export default Profile;
