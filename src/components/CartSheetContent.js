import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StateContext} from '../state';

export default () => {
  return (
    <StateContext.Consumer>
      {value => (
        <View
          style={[
            styles.swipe,
            value[0].showCartSheet ? styles.swipe_opened : styles.swipe_closed,
          ]}>
          {value[0].cart.map((item, index) => (
            <Text style={styles.swipe_text} key={index}>
              {item.name}
            </Text>
          ))}
        </View>
      )}
    </StateContext.Consumer>
  );
};

const styles = StyleSheet.create({
  swipe: {
    backgroundColor: 'white',
  },
  swipe_closed: {
    height: 0,
  },
  swipe_opened: {
    padding: 16,
    height: 300,
  },
  swiper_header_container: {
    height: 64,
    backgroundColor: '#FAFAFA',
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
