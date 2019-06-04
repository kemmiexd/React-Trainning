import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import MouseImage from './../assets/mouse.png';

export default function CategoryListItem(props) {
  const { category, onPress } = props; 
  
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={styles.boxCategory}>
        <Text style={styles.categoryTitle}>{ category.name }</Text>
        <Image style={styles.categoryImage} source={MouseImage} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  boxCategory: {
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
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
    width: 128,
    height: 128,
  },
  categoryTitle: {
    textTransform: 'uppercase',
    marginBottom: 5,
    fontWeight: "600",
  }
});