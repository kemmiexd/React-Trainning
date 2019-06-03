import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';

import CategoryListItem from './components/CategoryListItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        { id: 1, name: 'Razer Mouse' },
        { id: 2, name: 'SteelSeri Mouse' },
        { id: 3, name: 'Fuhlen Mouse' }
      ]
    }
  }
  render() {
    const { categories } = this.state;

    return (
      <View style={styles.container}>
          <FlatList 
            style={styles.scrollView}
            data={categories}
            renderItem={({ item }) => <CategoryListItem category={item} />}
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
