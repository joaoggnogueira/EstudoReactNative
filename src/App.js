import React, {useEffect, useReducer} from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import CartSheetContent from './components/CartSheetContent';
import CartSheetHeader from './components/CartSheetHeader';

import {View, StyleSheet} from 'react-native';
import {StateContext} from './state';

import Search from './views/Search';
import Home from './views/Home';
import Cart from './views/Cart';
import Orders from './views/Orders';
import Security from './views/Security';
import Account from './views/Account';
import Category from './views/Category';
import Product from './views/Product';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {getHeaderTitle} from '@react-navigation/elements';
import messaging from '@react-native-firebase/messaging';

const Drawer = createDrawerNavigator();

function saveTokenToDatabase(token) {
  console.log(token);
}

function App() {
  const globalState = {cart: [], showCartSheet: true};

  const reducer = (state, action) => {
    switch (action.type) {
      case 'push':
        return {...state, cart: state.cart.concat([action.item])};
      case 'open_cart_sheet':
        return {...state, showCartSheet: true};
      case 'close_cart_sheet':
        return {...state, showCartSheet: false};
      case 'toggle_cart_sheet':
        return {...state, showCartSheet: !state.showCartSheet};
      default:
        return state;
    }
  };

  useEffect(() => {
    messaging()
      .getToken()
      .then(token => {
        return saveTokenToDatabase(token);
      });

    return messaging().onTokenRefresh(token => {
      saveTokenToDatabase(token);
    });
  }, []);

  return (
    <StateContext.Provider value={useReducer(reducer, globalState)}>
      <View style={styles.container}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={props => <Sidebar {...props} />}
            backBehavior="history"
            screenOptions={{
              drawerStyle: {
                backgroundColor: '#c6cbef',
                width: 300,
              },
              header: ({navigation, route, options}) => {
                const title = getHeaderTitle(options, route.name);

                return (
                  <Topbar
                    title={title}
                    showBack={options.showBack}
                    style={options.headerStyle}
                    navigation={navigation}
                  />
                );
              },
            }}>
            <Drawer.Screen
              name="Home"
              options={{title: 'Cardápio'}}
              component={Home}
            />
            <Drawer.Screen
              options={{headerShown: false}}
              name="Search"
              component={Search}
            />
            <Drawer.Screen
              name="Cart"
              options={{title: 'Carrinho'}}
              component={Cart}
            />
            <Drawer.Screen
              name="Orders"
              options={{title: 'Pedidos'}}
              component={Orders}
            />
            <Drawer.Screen
              name="Account"
              options={{title: 'Carrinho'}}
              component={Account}
            />
            <Drawer.Screen
              name="Security"
              options={{title: 'Segurança'}}
              component={Security}
            />
            <Drawer.Screen
              name="Category"
              options={{title: ''}}
              component={Category}
            />
            <Drawer.Screen
              name="Product"
              options={{title: ''}}
              component={Product}
            />
          </Drawer.Navigator>
        </NavigationContainer>
        <View>
          <CartSheetHeader />
          <CartSheetContent />
        </View>
      </View>
    </StateContext.Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
  },
});
