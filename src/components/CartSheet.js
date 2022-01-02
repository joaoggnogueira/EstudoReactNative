import React, {useRef} from 'react';
import CartSheetContent from '../components/CartSheetContent';
import CartSheetHeader from '../components/CartSheetHeader';

import {StyleSheet, Animated} from 'react-native';
import {StateContext} from '../state';

function CartSheet() {
  const heightAnim = useRef(new Animated.Value(300)).current;

  const CartSheetView = ([state]) => {
    Animated.timing(heightAnim, {
      toValue: state.showCartSheet ? 0 : 300,
      duration: 200,
      useNativeDriver: true,
    }).start();

    return (
      <Animated.View
        style={[styles.cartSheet, {transform: [{translateY: heightAnim}]}]}>
        <CartSheetHeader state={state} />
        <CartSheetContent state={state} />
      </Animated.View>
    );
  };

  return (
    <>
      <StateContext.Consumer>
        {value => CartSheetView(value)}
      </StateContext.Consumer>
    </>
  );
}

export default CartSheet;

const styles = StyleSheet.create({
  cartSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
