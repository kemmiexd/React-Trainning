import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function ProductListItem(props) {
  const { product, onAddToCartClick } = props;
  return (
    <View style={styles.boxProduct}>
      <Image style={styles.img} source={{ uri: product.images[0].url }} />
      <Text style={styles.name}>{ product.name }</Text>
      <View style={styles.row}>
        <Text style={styles.price} >{product.price}</Text>
        <TouchableOpacity onPress={onAddToCartClick}>
          <Text style={styles.cartButton}>Add +</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  boxProduct: {
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
    borderStyle: 'solid',
    overflow: 'hidden'
  },
  img: {
    width: 150, 
    height: 150
  },
  name: {
    textAlign: 'left',
    fontWeight: '600',
    marginBottom: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    color: '#585858',
    fontSize: 16,
    flex: 1
  },
  cartButton: {
    color: '#f00',
    fontSize: 16
  }
})