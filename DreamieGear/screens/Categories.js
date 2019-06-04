import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import axios from 'axios';

import CategoryListItem from './../components/CategoryListItem';

export default class Categories extends React.Component {
  static navigationOptions = {
    title: 'Dreamie Gear'
  }

  constructor(props) {
    super(props);

    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    axios
      .get('categories')
      .then(res => {
        this.setState({
          categories: res.data
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    const { navigation } = this.props;
    const { categories } = this.state;

    return (
      <View style={styles.container}>
          <FlatList 
            style={styles.scrollView}
            data={categories}
            renderItem={({ item }) => (
              <CategoryListItem 
                category={item} 
                onPress={() => navigation.navigate('Category', {
                  categoryName: item.name,
                  categoryId: item.id
                })}
              />
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
    marginTop: 30
  },
  scrollView: {
    paddingLeft: 15,
    paddingRight: 15,
  }
});
