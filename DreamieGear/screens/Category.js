import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import axios from 'axios';

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
      products: []
    }
  }
  
  componentDidMount() {
    const categoryId = this.props.navigation.getParam('categoryId');

    axios
      .get(`products?filter=category%20${categoryId}`)
      .then(res => {
        this.setState({
          products: res.data
        })
      })
      .catch(err => {
        console.error(err)
      })
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
