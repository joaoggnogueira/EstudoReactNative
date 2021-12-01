import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default () => (
  <View style={styles.container}>
    <Text style={styles.text}>Orders</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});
