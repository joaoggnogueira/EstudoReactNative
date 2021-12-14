import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';
import {colors} from '../colors.js';

import {products} from '../provider/Products';

import ProductItem from '../components/ProductItem';

export default class Searchbar extends Component {
  state = {
    search: '',
    results: [],
  };

  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(newsearch) {
    const results = newsearch
      ? products.filter(
          d =>
            d.name
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .indexOf(newsearch) !== -1,
        )
      : [];
    this.setState({search: newsearch, results: results});
  }

  render() {
    return (
      <>
        <View style={[styles.searchbar, styles.elevation]}>
          <View style={styles.iconPadding}>
            <FontAwesomeIcon icon={faSearch} color={colors.primary} size={24} />
          </View>
          <TextInput
            autoFocus={true}
            placeholder="o que procura?"
            placeholderTextColor={colors.primary}
            value={this.state.search}
            onChangeText={this.updateSearch}
            style={styles.textInput}
          />
          <View style={styles.flexGrow} />
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => this.props.navigation.goBack()}>
            <View style={styles.iconPadding}>
              <FontAwesomeIcon
                icon={faTimes}
                color={colors.primary}
                size={24}
              />
            </View>
          </TouchableHighlight>
        </View>
        <FlatList
          contentContainerStyle={styles.scrollViewContent}
          style={styles.scrollView}
          data={this.state.results}
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
      </>
    );
  }
}

const styles = StyleSheet.create({
  flexGrow: {
    flexGrow: 1,
  },
  textInput: {
    color: colors.primary,
  },
  searchbar: {
    zIndex: 3,
    flexDirection: 'row',
    backgroundColor: '#FAFAFA',
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
  iconPadding: {
    height: 64,
    paddingRight: 24,
    paddingLeft: 24,
    justifyContent: 'center',
  },
  scrollViewContent: {
    paddingTop: 24,
    paddingBottom: 64 + 128,
  },
  scrollView: {
    position: 'absolute',
    backgroundColor: 'white',
    flexGrow: 1,
    height: '100%',
    width: '100%',
    zIndex: 2,
    paddingTop: 64,
    paddingLeft: 24,
    paddingRight: 24,
  },
});
