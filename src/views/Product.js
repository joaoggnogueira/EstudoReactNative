import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Item extends Component {
  constructor(props) {
    super(props);
    const _props = this.props;
    const navigation = _props.navigation;
    this._unsubscribe = navigation.addListener(
      'focus',
      this.onFocus.bind(this),
    );
  }
  onFocus() {
    const _props = this.props;
    const navigation = _props.navigation;
    const product = _props.route.params.item;
    navigation.setOptions({
      title: product.name,
      showBack: true,
    });
  }

  render() {
    const item = this.props.route.params.item;
    return (
      <View style={styles.container}>
        <View style={[styles.paddingView, styles.row]}>
          <Text style={styles.title}>
            Preço {item.getPriceStringFormat()} R$
          </Text>
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
