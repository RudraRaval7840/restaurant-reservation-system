import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigater from './AppNavigater';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store/store';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <AppNavigater />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
