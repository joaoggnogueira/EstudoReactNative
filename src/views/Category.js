import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class Category extends Component {
  state = {
    category: {},
  };

  constructor(props) {
    super(props);
    this.state.category = this.props.route.params.item;
  }
  render() {
    const category = this.props.route.params.item;
    return (
      <View style={styles.container}>
        <Image style={styles.imagewrap} source={{uri: category.image_uri}} />
        <View style={styles.paddingView}>
          <Text style={styles.title}>{category.name}</Text>
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
