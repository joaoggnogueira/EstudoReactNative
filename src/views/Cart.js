import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {StateContext} from '../state';
import {colors} from '../colors';
import OrderItem from '../components/OrderItem';

function priceToString(price) {
  if (price.toString().indexOf('.') === -1) {
    return price + '.00';
  }
  return price.toString().padEnd(4, 0);
}

const CartView = (state, props) => {
  const total = state.cart.reduce(
    (acc, item) => acc + item.quantity * item.product.price,
    0,
  );
  return (
    <View style={styles.container}>
      <View style={[styles.header_container, styles.row]}>
        <Text style={styles.textWhite}>Carrinho</Text>
        <TouchableHighlight
          underlayColor={colors.secondary + '44'}
          style={styles.navbutton_touchableHighlight}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <View style={styles.navbutton}>
            <FontAwesomeIcon icon={faTimes} color={'white'} size={24} />
          </View>
        </TouchableHighlight>
      </View>
      <View style={[styles.price_container, styles.row]}>
        <Text style={styles.text}>Preço total: {priceToString(total)} R$</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.scrollViewContent}
        style={styles.scrollView}
        data={state.cart}
        keyExtractor={i => `${i.product.id}`}
        renderItem={({item}) => <OrderItem item={item} />}
      />
    </View>
  );
};

export default props => (
  <StateContext.Consumer>
    {value => CartView(value[0], props)}
  </StateContext.Consumer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  scrollView: {
    backgroundColor: 'white',
    flexGrow: 1,
  },
  navbutton: {
    height: 64,
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContent: {
    paddingTop: 24,
    paddingBottom: 64,
    paddingLeft: 24,
    paddingRight: 24,
  },
  header_container: {
    marginBottom: 2,
    backgroundColor: colors.primary,
  },
  navbutton_touchableHighlight: {
    borderRadius: 32,
  },
  price_container: {
    backgroundColor: '#EEE',
  },
  row: {
    paddingLeft: 24,
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
  textWhite: {
    color: 'white',
  },
});
