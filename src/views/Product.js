import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const item = this.props.route.params.item;
    return (
      <View style={styles.container}>
        <View style={[styles.paddingView, styles.row]}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.title}>{item.getPriceStringFormat()} R$</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: 'black',
  },
  paddingView: {
    padding: 24,
  },
  text: {},
});
