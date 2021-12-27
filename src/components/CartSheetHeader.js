import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {useStateValue} from '../state';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {
  faChevronUp,
  faChevronDown,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

export default props => {
  const [state, dispatch] = useStateValue();

  return (
    <TouchableHighlight
      activeOpacity={0.95}
      underlayColor="transparent"
      onPress={() => {
        dispatch({type: 'toggle_cart_sheet'});
      }}>
      <View style={styles.swiper_header_container}>
        <View style={styles.swipe_header}>
          <FontAwesomeIcon icon={faShoppingCart} color={'white'} size={24} />
          <Text style={styles.swipe_text}>
            {state.cart.length} items no carrinho
          </Text>
          <FontAwesomeIcon
            icon={state.showCartSheet ? faChevronDown : faChevronUp}
            color={'white'}
            size={24}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  swiper_header_container: {
    height: 64,
    elevation: 10,
    backgroundColor: 'purple',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  swipe_header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    paddingLeft: 24,
    paddingRight: 24,
  },
  swipe_text: {
    color: 'white',
  },
});
