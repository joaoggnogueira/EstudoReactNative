import React from 'react';
import CategoryItem from '../components/CategoryItem';

import categories from '../provider/Categories';

import {FlatList, StyleSheet} from 'react-native';

export default props => {
  return (
    <FlatList
      contentContainerStyle={styles.scrollViewContent}
      style={styles.scrollView}
      data={categories}
      keyExtractor={i => `${i.id}`}
      renderItem={({item}) => (
        <CategoryItem
          item={item}
          onPress={i => props.navigation.navigate('Category', {item: i})}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 24,
    paddingRight: 24,
  },
  scrollView: {
    backgroundColor: 'white',
    flexGrow: 1,
  },
});
