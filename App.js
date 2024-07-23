import {View, Text} from 'react-native';
import React from 'react';
import AppNavigater from './AppNavigater';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store/store';

const App = () => {
  return (
  <Provider store={store}>
<AppNavigater/>
  </Provider>
  );
};

export default App;
