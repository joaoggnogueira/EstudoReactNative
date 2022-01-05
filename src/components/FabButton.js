import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import {colors} from '../colors.js';

export default props => (
  <TouchableHighlight
    underlayColor={colors.secondary + '44'}
    style={styles.navbutton_touchableHighlight}
    onPress={props.onPress}>
    <View style={styles.navbutton}>
      <FontAwesomeIcon
        icon={props.icon}
        color={props.iconColor || colors.primary}
        size={props.iconSize || 24}
      />
      {props.children}
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  navbutton_touchableHighlight: {
    borderRadius: 32,
  },
  navbutton: {
    height: 64,
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
