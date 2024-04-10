import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import Home from './src/screens/Home';

const App = () => {
  return ( 
    <Home></Home>
  );
};

//creating styles objects
const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'blue',
  }
});

export default App