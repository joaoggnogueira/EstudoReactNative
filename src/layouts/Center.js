import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

export default props => (
  <ScrollView style={styles.scrollView}>
    <View style={styles.children}>{props.children}</View>
  </ScrollView>
);

const styles = StyleSheet.create({
  children: {
    paddingTop: 24,
    paddingBottom: 64 + 24,
  },
  scrollView: {
    backgroundColor: 'white',
    flexGrow: 1,
    paddingLeft: 24,
    paddingRight: 24,
  },
});
