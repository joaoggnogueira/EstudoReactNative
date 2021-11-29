import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {colors} from '../colors.js';

export default props => (
  <View style={styles.item}>
    <Text style={[styles.text, styles.textBold]}>{props.item.name}</Text>
    <Text style={styles.text}>{props.item.getPriceStringFormat()} R$</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    width: '100%',
    paddingTop: 24,
    paddingBottom: 24,
    overflow: 'hidden',
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: colors.primary,
    marginTop: 8,
  },
  textBold: {
    fontWeight: 'bold',
  },
  text: {
    marginRight: 12,
    marginLeft: 12,
    color: '#444444',
  },
});
