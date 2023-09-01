import React from 'react';
import {View, Text} from 'react-native';
import Home from './screens/Home/Home';
import {GlobalProvider} from './context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  );
};

export default App;
