import React, {useEffect} from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import {View, Text} from 'react-native';

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
import BottomSheet from 'reanimated-bottom-sheet';

const Drawer = createDrawerNavigator();

function saveTokenToDatabase(token) {
  console.log(token);
}

function App() {
  const sheetRef = React.useRef(null);

  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}>
      <Text style={{color: 'black'}}>Swipe down to close</Text>
    </View>
  );

  const BottomBar = () => (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[450, 300, 0]}
      borderRadius={10}
      renderContent={renderContent}
      initialSnap={2}
    />
  );
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
    <View style={{flex: 1, width: '100%'}}>
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
      <BottomBar />
    </View>
  );
}

export default App;
