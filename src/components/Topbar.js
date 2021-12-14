import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBars,
  faCoffee,
  faSearch,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import {colors} from '../colors.js';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export default class Topbar extends Component {
  render() {
    return (
      <>
        <View style={[styles.topbar, styles.elevation]}>
          <TouchableHighlight
            onPress={() => {
              this.props.showBack
                ? this.props.navigation.goBack()
                : this.props.navigation.openDrawer();
            }}>
            <View style={styles.navbutton}>
              <Text style={styles.navbutton_text}>
                <FontAwesomeIcon
                  icon={this.props.showBack ? faChevronLeft : faBars}
                  color={'white'}
                  size={24}
                />
              </Text>
            </View>
          </TouchableHighlight>
          <View style={styles.flexGrow} />
          <FontAwesomeIcon icon={faCoffee} color={'white'} size={24} />
          <Text style={styles.header_text}>{this.props.title}</Text>
          <View style={styles.flexGrow} />
          <TouchableHighlight
            onPress={() => {
              this.props.navigation.navigate('Search');
            }}>
            <View style={styles.navbutton}>
              <Text style={styles.navbutton_text}>
                <FontAwesomeIcon icon={faSearch} color={'white'} size={24} />
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  flexGrow: {
    flexGrow: 1,
  },
  header_text: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '200',
    fontSize: 16,
    marginLeft: 4,
  },
  navbutton: {
    height: 64,
    marginRight: 24,
    marginLeft: 24,
    justifyContent: 'center',
  },
  navbutton_text: {
    color: '#FFF',
  },
  topbar: {
    zIndex: 3,
    flexDirection: 'row',
    backgroundColor: colors.primary,
    height: 64,
    width: '100%',
    alignItems: 'center',
  },
  elevation: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
  },
});
