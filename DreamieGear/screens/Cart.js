import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styled from 'styled-components';

import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';

export default class CartScreen extends React.Component {
  static navigationOptions = {
    title: 'Cart'
  }

  render() {
    return <View>
      <ScrollView style={{marginBottom: 80}}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ScrollView>
      <CartResult />
    </View>
  }
}
