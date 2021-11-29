import React, {useRef, useState} from 'react';
import Category from './components/Category';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Searchbar from './components/Searchbar';

import categories from './provider/Categories';

import {View, DrawerLayoutAndroid, FlatList, StyleSheet} from 'react-native';

function App() {
  const drawer = useRef(null);
  const [searchbarVisibility, setSearchbarVisibility] = useState(false);

  function openDrawer() {
    drawer.current.openDrawer();
  }

  function openSearch() {
    if (!searchbarVisibility) {
      setSearchbarVisibility(true);
    } else {
      setSearchbarVisibility(false);
    }
  }

  function closeSearchbar() {
    setSearchbarVisibility(false);
  }

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={() => <Sidebar />}>
      <View>
        {!searchbarVisibility ? (
          <Topbar openDrawer={openDrawer} openSearch={openSearch} />
        ) : (
          <Searchbar closeSearchbar={closeSearchbar} />
        )}
        <FlatList
          contentContainerStyle={styles.scrollViewContent}
          style={styles.scrollView}
          data={categories}
          keyExtractor={i => `${i.id}`}
          renderItem={Category}
        />
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingTop: 24,
    paddingBottom: 64 + 24,
    paddingLeft: 24,
    paddingRight: 24,
  },
  scrollView: {
    backgroundColor: 'white',
    flexGrow: 1,
  },
});

export default App;
