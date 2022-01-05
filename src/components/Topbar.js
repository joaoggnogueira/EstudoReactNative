import React, {Component} from 'react';
import {
  faBars,
  faSearch,
  faShoppingCart,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import {StateContext} from '../state';
import {colors} from '../colors.js';
import {View, Text, StyleSheet} from 'react-native';
import FabButton from '../components/FabButton';

export default class Topbar extends Component {
  goBack() {
    this.props.navigation.goBack();
  }
  openDrawer() {
    this.props.navigation.openDrawer();
  }
  goToCart() {
    this.props.navigation.navigate('Cart');
  }
  openSearch() {
    this.props.navigation.navigate('Search');
  }
  cartCounterRender([state]) {
    return state.cart.length ? (
      <View style={styles.navbutton_counter}>
        <Text style={styles.navbutton_counter_text}>
          {state.cart.reduce((acc, d) => acc + d.quantity, 0)}
        </Text>
      </View>
    ) : null;
  }
  render() {
    return (
      <>
        <View style={[styles.topbar]}>
          {this.props.showBack ? (
            <FabButton onPress={this.goBack.bind(this)} icon={faChevronLeft} />
          ) : (
            <FabButton onPress={this.openDrawer.bind(this)} icon={faBars} />
          )}
          <Text style={styles.header_text}>{this.props.title}</Text>
          <View style={styles.flexGrow} />
          {this.props.hideCart ? null : (
            <FabButton onPress={this.goToCart.bind(this)} icon={faShoppingCart}>
              <StateContext.Consumer>
                {this.cartCounterRender.bind(this)}
              </StateContext.Consumer>
            </FabButton>
          )}
          <FabButton onPress={this.openSearch.bind(this)} icon={faSearch} />
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
  topbar: {
    zIndex: 3,
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 64,
    width: '100%',
    alignItems: 'center',
  },
});
