import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet
} from 'react-native';

import MouseImage from './../assets/mouse.png';

export default function CategoryListItem(props) {
  const { category } = props; 
  return <View style={styles.boxCategory}>
    <Text style={styles.categoryTitle}>{ category.name }</Text>
    <Image style={styles.categoryImage} source={MouseImage} />
  </View>
}

const styles = StyleSheet.create({
  boxCategory: {
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 },
    backgroundColor: 'white',
    elevation: 3,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderStyle: 'solid'
  },
  categoryImage: {
    width: 70,
    height: 70,
  },
  categoryTitle: {
    textTransform: 'uppercase',
    marginBottom: 5,
    fontWeight: "600",
  }
});