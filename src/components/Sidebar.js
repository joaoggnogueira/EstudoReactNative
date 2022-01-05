import React, {Component} from 'react';

import {View, Text, StyleSheet, Platform} from 'react-native';
import {colors} from '../colors.js';
import {
  faUserCircle,
  faShoppingCart,
  faBookmark,
  faShieldAlt,
  faSignOutAlt,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

import SidebarButton from './SidebarButton';

export default class Sidebar extends Component {
  render() {
    return (
      <View style={styles.navigationContainer}>
        <View style={styles.row} />
        <SidebarButton
          text="Cardápio"
          icon={faHome}
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <SidebarButton
          text="Carrinho"
          icon={faShoppingCart}
          onPress={() => this.props.navigation.navigate('Cart')}
        />
        <SidebarButton
          text="Meus Pedidos"
          icon={faBookmark}
          onPress={() => this.props.navigation.navigate('Orders')}
        />
        <SidebarButton
          text="Conta"
          icon={faUserCircle}
          onPress={() => this.props.navigation.navigate('Account')}
        />
        <SidebarButton
          text="Segurança"
          icon={faShieldAlt}
          onPress={() => this.props.navigation.navigate('Security')}
        />
        <View style={styles.flexGrow} />
        <SidebarButton text="Encerrar Sessão" icon={faSignOutAlt} small />
        <Text style={styles.textColor}>versão {Platform.OS} 1.0.0</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigationContainer: {
    backgroundColor: colors.secondary,
    paddingTop: 24,
    paddingBottom: 24,
    flex: 1,
  },
  header_text: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '200',
    fontSize: 18,
    marginLeft: 4,
  },
  row: {
    marginBottom: 64,
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
    alignItems: 'center',
  },
  flexGrow: {
    flexGrow: 2,
  },
  textColor: {
    paddingLeft: 24,
    paddingRight: 24,
    color: '#FFFFFF',
  },
});
