import React, {Component} from 'react';

import {View, TouchableHighlight, StyleSheet, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {colors} from '../colors';

export default class Sidebar extends Component {
  render() {
    return (
      <TouchableHighlight
        activeOpacity={1}
        underlayColor={colors.secondary}
        onPress={() => {}}>
        <View style={styles.button}>
          {this.props.icon ? (
            <FontAwesomeIcon icon={this.props.icon} color={'white'} size={24} />
          ) : null}
          <Text style={[styles.text, this.props.small ? styles.small : false]}>
            {this.props.text.toUpperCase()}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
  },
  text: {color: 'white', fontSize: 18, marginLeft: 8},
  small: {fontSize: 14},
});
