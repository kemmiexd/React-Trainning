import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import MouseItem from './../assets/mouse-razer.jpg';

import ProductListItem from './../components/ProductListItem';

export default class Category extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('categoryName')
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 1,
          images: [
            {
              url: 'https://static.techspot.com/images2/news/bigimage/2017/04/2017-04-26-image-6.png'
            }
          ],
          name: 'Razer Mamba Wireless Chroma',
          price: '$500'
        },
        {
          id: 2,
          images: [
            {
              url: 'https://images-na.ssl-images-amazon.com/images/I/51YmXnOjhEL._SX425_.jpg'
            }
          ],
          name: 'Razer Taipan Ambidextrous',
          price: '$200'
        },
      ]
    }
  }

  render() {
    const { products } = this.state;

    return (
      <View style={styles.container}>
        <FlatList 
          style={styles.scrollView}
          numColumns={2}
          data={products}
          renderItem={({ item }) => (
            <View style={styles.wrapper}>
              <ProductListItem 
                product={item} 
              />
            </View>
          )}
          keyExtractor={item => `${item.id}`}
        />    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginTop: 15
  },
  scrollView: {
    paddingLeft: 7.5,
    paddingRight: 7.5,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 7.5
  }
});
