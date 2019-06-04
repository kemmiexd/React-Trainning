import React from 'react';
import { View, Text } from 'react-native';

export default class OrdersScreen extends React.Component {
  static navigationOptions = {
    title: 'Orders'
  }

  render() {
    return <View>
      <Text>Orders</Text>
    </View>
  }
}