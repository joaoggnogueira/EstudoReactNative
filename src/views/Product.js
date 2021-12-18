import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PushButton from '../components/PushButton.js';

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
          <PushButton item={item} />
        </View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
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
  text: {
    color: 'black',
    padding: 24,
  },
});
