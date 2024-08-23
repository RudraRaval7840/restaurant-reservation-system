import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  TextInput,
  Button,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GetAllPadingRequestAction} from '../../../../redux/Action/GetAllPadingRequestAction';
import {ApproveRejectAction} from '../../../../redux/Action/AprovedRejectAction';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PandingRequest = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [rejectionText, setRejectionText] = useState('');

  const dispatch = useDispatch();

  const AllPandingRequest = useSelector(
    state => state.pandingRequest?.GetAllPadingRequest?.data || [],
  );
  console.log('AllPandingRequest', AllPandingRequest[0]);

  useEffect(() => {
    dispatch(GetAllPadingRequestAction());
  }, [dispatch]);

  const handleApproveRejected = (action, _id) => {
    if (action === 'reject' && !rejectionText.trim()) {
      // Alert.alert('Rejection Reason', 'Please provide a reason for rejection.');
      return;
    }

    dispatch(ApproveRejectAction(action, _id, rejectionText));

    if (action === 'approve') {
    } else if (action === 'reject') {
      Alert.alert('Success', 'Request has been rejected.');
    }

    setModalVisible(false);
    setRejectionText('');
  };

  const openRejectionModal = id => {
    setSelectedRequestId(id);
    setModalVisible(true);
  };

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.restaurantName}>{item.RestaurantName}</Text>
      <Text style={styles.detailText}>Address: {item.Address}</Text>
      <Text style={styles.detailText}>Area: {item.Area}</Text>
      <Text style={styles.detailText}>City: {item.City}</Text>
      <Text style={styles.detailText}>Contact: {item.Contact}</Text>
      <Text style={styles.detailText}>
        Requested By: {item._id}
      </Text>
      <Text style={styles.statusText}>Status: {item.status}</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.approveButton}
          onPress={() => handleApproveRejected('approve', item._id)}>
          <Text>Approve</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.rejectButton}
          onPress={() => openRejectionModal(item.requestedBy._id)}>
          <Text>Reject</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Padding Request</Text>
      </View> */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 50,
          justifyContent: 'center',
          borderWidth: 1,
        }}>
        <TouchableOpacity
          style={{position: 'absolute', left: 10}}
          onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={{fontSize: 23, fontWeight: 'bold'}}>Padding Request</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={AllPandingRequest}
          keyExtractor={item => item._id}
          renderItem={renderItem}
        />
      </View>

      {/* Rejection Reason Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Rejection Reason</Text>
            <TextInput
              style={styles.rejectionInput}
              placeholder="Enter rejection reason"
              value={rejectionText}
              onChangeText={setRejectionText}
              multiline
            />
            <Button
              title="Submit"
              onPress={() => handleApproveRejected('reject', selectedRequestId)}
            />
            <Button
              title="Cancel"
              color="red"
              onPress={() => {
                setModalVisible(false);
                setRejectionText('');
              }}
            />
          </View>
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

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 3,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 3,
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007bff',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  approveButton: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'green',
  },
  rejectButton: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'red',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  rejectionInput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default PandingRequest;
