import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';

import Category from './screens/Category';
import Categories from './screens/Categories';
import Cart from './screens/Cart.js';
import Orders from './screens/Orders.js';
import Settings from './screens/Settings.js';

const CategoryStack = createStackNavigator(
  {
    Categories,
    Category
  }
);
CategoryStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => {
    return <Icon 
      name="home"
      size={24}
      color={focused ? 'tomato' : 'gray'}
    />
  },
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
}

const CartStack = createStackNavigator({
  Cart
});
CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: ({ focused }) => {
    return <Icon 
      name="shoppingcart"
      size={24}
      color={focused ? 'tomato' : 'gray'}
    />
  },
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
}

const OrdersStack = createStackNavigator({
  Orders
});
OrdersStack.navigationOptions = {
  tabBarLabel: 'Orders',
  tabBarIcon: ({ focused }) => {
    return <Icon 
      name="creditcard"
      size={24}
      color={focused ? 'tomato' : 'gray'}
    />
  },
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
}

const SettingsStack = createStackNavigator({
  Settings
});
SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => {
    return <Icon 
      name="setting"
      size={24}
      color={focused ? 'tomato' : 'gray'}
    />
  },
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
}

const AppNavigator = createBottomTabNavigator({
  CategoryStack,
  CartStack,
  OrdersStack,
  SettingsStack
})

export default AppNavigator;