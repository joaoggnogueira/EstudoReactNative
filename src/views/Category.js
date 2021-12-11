import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class Category extends Component {
  state = {
    category: {},
  };

  constructor(props) {
    super(props);
    this.state.category = this.props.route.params.item;
    const _props = this.props;
    const navigation = _props.navigation;
    this._unsubscribe = navigation.addListener(
      'focus',
      this.onFocus.bind(this),
    );
  }

  onFocus() {
    console.log('teste');
    const _props = this.props;
    const navigation = _props.navigation;
    const category = _props.route.params.item;
    navigation.setOptions({
      title: category.name,
      showBack: true,
    });
  }

  render() {
    const category = this.props.route.params.item;
    return (
      <View style={styles.container}>
        <Image style={styles.imagewrap} source={{uri: category.image_uri}} />
        <View style={styles.paddingView}>
          <Text style={styles.title}>Categoria: {category.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  imagewrap: {
    width: '100%',
    height: 128,
    resizeMode: 'cover',
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
