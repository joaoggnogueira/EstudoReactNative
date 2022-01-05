import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {StateContext} from '../state';
import OrderItem from '../components/OrderItem';

function priceToString(price) {
  if (price.toString().indexOf('.') === -1) {
    return price + '.00';
  }
  return price.toString().padEnd(4, 0);
}

const CartView = state => {
  const total = state.cart.reduce(
    (acc, item) => acc + item.quantity * item.product.price,
    0,
  );
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.text}>Preço total: {priceToString(total)}</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.scrollViewContent}
        style={styles.scrollView}
        data={state.cart}
        keyExtractor={i => `${i.id}`}
        renderItem={({item}) => <OrderItem item={item} />}
      />
    </View>
  );
};

export default () => (
  <StateContext.Consumer>{value => CartView(value[0])}</StateContext.Consumer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  scrollView: {
    backgroundColor: 'white',
    flexGrow: 1,
  },
  scrollViewContent: {
    paddingTop: 24,
    paddingBottom: 64,
    paddingLeft: 24,
    paddingRight: 24,
  },
  header_container: {
    height: 64,
    marginBottom: 2,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: '#EEE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});
