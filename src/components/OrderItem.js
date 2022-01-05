import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default ({item}) => (
  <View style={styles.cart_item}>
    <Text style={styles.text}>
      {item.quantity}x {item.product.name}
    </Text>
    <View style={styles.flexGrow} />
    <Text style={styles.text}>{item.product.getPriceStringFormat()} R$</Text>
  </View>
);

const styles = StyleSheet.create({
  flexGrow: {
    flexGrow: 1,
  },
  cart_item: {
    height: 64,
    marginBottom: 2,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});
