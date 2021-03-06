import React from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';

export default props => (
  <TouchableHighlight
    activeOpacity={1}
    underlayColor="transparent"
    onPress={() => {
      props.onPress(props.item);
    }}>
    <View style={styles.item}>
      <Text style={[styles.text, styles.textBold]}>{props.item.name}</Text>
      <Text style={styles.text}>{props.item.getPriceStringFormat()} R$</Text>
    </View>
  </TouchableHighlight>
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
    marginTop: 8,
  },
  textBold: {
    fontWeight: 'bold',
  },
  text: {
    marginRight: 24,
    marginLeft: 24,
    color: '#444444',
  },
});
