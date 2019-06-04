import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import axios from 'axios';

import AppNavigator from './AppNavigator';

axios.defaults.baseURL = 'http://5bb8ef65b6ed2c0014d47508.mockapi.io/Ok/';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  
  render() {
    return (
      <AppContainer style={styles.container} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f00'
  },
});
