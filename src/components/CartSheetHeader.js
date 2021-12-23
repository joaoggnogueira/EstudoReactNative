import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {StateContext, useStateValue} from '../state';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {colors} from '../colors.js';

export default () => {
  const [state, dispatch] = useStateValue();
  return (
    <TouchableHighlight
      activeOpacity={0.95}
      underlayColor="transparent"
      onPress={() => {
        dispatch({type: 'toggle_cart_sheet'});
      }}>
      <View style={styles.swiper_header_container}>
        <StateContext.Consumer>
          {value => (
            <View style={styles.swipe_header}>
              <Text style={styles.swipe_text}>
                {value[0].cart.length} items no carrinho
              </Text>
              <FontAwesomeIcon
                icon={state.showCartSheet ? faChevronDown : faChevronUp}
                color={'black'}
                size={24}
              />
            </View>
          )}
        </StateContext.Consumer>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  swiper_header_container: {
    height: 64,
    elevation: 10,
    backgroundColor: '#EEE',
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
    color: 'black',
  },
});
