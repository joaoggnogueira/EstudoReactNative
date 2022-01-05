import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';

import {colors} from '../colors';

export default ({item, onPress}) => {
  return (
    <TouchableHighlight
      underlayColor={colors.secondary + '44'}
      style={styles.navbutton_touchableHighlight}
      onPress={() => {
        onPress(item);
      }}>
      <View style={styles.cart_item}>
        <Text style={styles.text}>
          {item.quantity}x {item.product.name}
        </Text>
        <View style={styles.flexGrow} />
        <Text style={styles.text}>
          {item.product.getPriceStringFormat()} R$
        </Text>
      </View>
    </TouchableHighlight>
  );
};

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
