import React, {useEffect} from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

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
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <Sidebar {...props} />}
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
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen
          options={{headerShown: false}}
          name="Search"
          component={Search}
        />
        <Drawer.Screen name="Cart" component={Cart} />
        <Drawer.Screen name="Orders" component={Orders} />
        <Drawer.Screen name="Account" component={Account} />
        <Drawer.Screen name="Security" component={Security} />
        <Drawer.Screen name="Category" component={Category} />
        <Drawer.Screen name="Product" component={Product} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
