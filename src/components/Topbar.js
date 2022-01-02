import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBars,
  faSearch,
  faShoppingCart,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import {StateContext} from '../state';
import {colors} from '../colors.js';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export default class Topbar extends Component {
  render() {
    return (
      <>
        <View style={[styles.topbar, styles.elevation]}>
          <TouchableHighlight
            underlayColor="#FFFFFF44"
            style={styles.navbutton_touchableHighlight}
            onPress={() => {
              this.props.showBack
                ? this.props.navigation.goBack()
                : this.props.navigation.openDrawer();
            }}>
            <View style={styles.navbutton}>
              <FontAwesomeIcon
                icon={this.props.showBack ? faChevronLeft : faBars}
                color={colors.primary}
                size={24}
              />
            </View>
          </TouchableHighlight>
          <Text style={styles.header_text}>{this.props.title}</Text>
          <View style={styles.flexGrow} />
          <TouchableHighlight
            underlayColor="#FFFFFF44"
            onPress={() => {}}
            style={styles.navbutton_touchableHighlight}>
            <View style={styles.navbutton}>
              <FontAwesomeIcon
                icon={faShoppingCart}
                color={colors.primary}
                size={24}
              />
              <StateContext.Consumer>
                {([state]) =>
                  state.cart.length ? (
                    <View style={styles.navbutton_counter}>
                      <Text style={styles.navbutton_counter_text}>
                        {state.cart.length}
                      </Text>
                    </View>
                  ) : null
                }
              </StateContext.Consumer>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#FFFFFF44"
            style={styles.navbutton_touchableHighlight}
            onPress={() => {
              this.props.navigation.navigate('Search');
            }}>
            <View style={styles.navbutton}>
              <FontAwesomeIcon
                icon={faSearch}
                color={colors.primary}
                size={24}
              />
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
    color: colors.primary,
    textAlign: 'center',
    fontWeight: '200',
    fontSize: 16,
    maxWidth: 180,
    marginLeft: 4,
  },
  navbutton_counter_text: {
    fontSize: 12,
    fontWeight: '900',
    textAlign: 'center',
  },
  navbutton_counter: {
    position: 'absolute',
    width: 24,
    height: 24,
    backgroundColor: colors.secondary,
    borderRadius: 12,
    right: 2,
    top: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbutton_touchableHighlight: {
    borderRadius: 32,
  },
  navbutton: {
    height: 64,
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topbar: {
    zIndex: 3,
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 64,
    width: '100%',
    alignItems: 'center',
  },
  elevation: {},
});
