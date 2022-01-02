import React, {Component} from 'react';
import {FlatList, View, StyleSheet, Image, Text} from 'react-native';
import ProductItem from '../components/ProductItem';
import SelectDropdown from 'react-native-select-dropdown';

import {colors} from '../colors.js';

const countries = ['relevantes', 'menor preço'];

export default class Category extends Component {
  state = {
    category: {},
  };

  constructor(props) {
    super(props);
    this.state.category = this.props.route.params.item;
    const _props = this.props;
    const navigation = _props.navigation;
    this._unsubscribe = navigation.addListener(
      'focus',
      this.onFocus.bind(this),
    );
  }

  onFocus() {
    const _props = this.props;
    const navigation = _props.navigation;
    const category = _props.route.params.item;
    navigation.setOptions({
      title: category.name,
      showBack: true,
    });
  }

  render() {
    const category = this.props.route.params.item;
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.imagewrap} source={{uri: category.image_uri}} />
          <View style={styles.row}>
            <Text style={styles.rowText}>Ordernar por: </Text>
            <SelectDropdown
              data={countries}
              buttonStyle={styles.selectButton}
              buttonTextStyle={styles.selectButtonText}
              defaultValueByIndex={0}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
            />
          </View>
        </View>

        <View style={styles.listContainer}>
          <FlatList
            contentContainerStyle={styles.scrollViewContent}
            style={styles.scrollView}
            data={category.products}
            keyExtractor={i => `${i.id}`}
            renderItem={({item}) => (
              <ProductItem
                item={item}
                onPress={i =>
                  this.props.navigation.navigate('Product', {item: i})
                }
              />
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
  },
  container: {
    flex: 1,
  },
  imagewrap: {
    width: '100%',
    height: 128,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    color: 'black',
  },
  paddingView: {
    padding: 24,
  },
  selectButton: {
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 24,
    marginRight: 8,
    width: 150,
    borderRadius: 16,
    height: 32,
    backgroundColor: '#FFFFFF44',
  },
  selectButtonText: {
    color: 'white',
  },
  rowText: {color: 'white'},
  row: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    elevation: 2,
  },
  listContainer: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 32,
  },
  scrollView: {
    position: 'absolute',
    backgroundColor: 'white',
    flexGrow: 1,
    height: '100%',
    width: '100%',
    zIndex: 2,
    paddingLeft: 24,
    paddingRight: 24,
  },
});
