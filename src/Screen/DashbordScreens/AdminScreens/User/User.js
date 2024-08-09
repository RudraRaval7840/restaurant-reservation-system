import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Swipeable } from 'react-native-gesture-handler';
import { GetAllUserAction } from '../../../../redux/Action/GetAllUserAction';
import { DeleteUserAction } from '../../../../redux/Action/DeleteuserAction';

const User = ({ navigation }) => {
  const dispatch = useDispatch();   
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  const GetAllUser = useSelector(state => state.GetAllser.GetAllUser.data);
  const deleteUserSuccess = useSelector(state => state.DeleteUser.success);
console.log(GetAllUser,'GetAllUser');
  useEffect(() => {
    dispatch(GetAllUserAction());
  }, [dispatch]);

  useEffect(() => {
    if (GetAllUser) {
      setFilteredUsers(GetAllUser);
    }
  }, [GetAllUser]);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredUsers(GetAllUser);
    } else {
      setFilteredUsers(
        GetAllUser.filter(user =>
          user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, GetAllUser]);

  useEffect(() => {
    if (deleteUserSuccess) {
      dispatch(GetAllUserAction());
    }
  }, [deleteUserSuccess, dispatch]);

  const handleDeleteUser = (_id) => {
    // Dispatch delete action
    dispatch(DeleteUserAction(_id));
  };

  const renderRightActions = (_id) => (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => Alert.alert(
        "Delete User",
        "Are you sure you want to delete this user?",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Delete", onPress: () => handleDeleteUser(_id) }
        ]
      )}
    >
      
      <Text style={styles.deleteButtonText}>Delete</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Swipeable renderRightActions={() => renderRightActions(item._id)}>
      <View style={styles.userCard}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    </Swipeable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>User List</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search users..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <View style={styles.content}>
        <FlatList
          data={filteredUsers}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  title: {
    fontSize: 25,
    fontWeight: 'bold',
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
  content: {
    flex: 1,
    marginHorizontal: 15,
  },
  userCard: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    elevation: 2,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  backButton: {
    position: 'absolute',
    left: 15,
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default User;
