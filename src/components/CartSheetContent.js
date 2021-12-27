import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

function priceToString(price) {
  if (price.toString().indexOf('.') === -1) {
    return price + '.00';
  }
  return price.toString().padEnd(4, 0);
}

export default props => {
  const total = props.state.cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <View style={styles.swipe}>
      <ScrollView style={styles.scrollView}>
        {props.state.cart.map((item, index) => (
          <View style={styles.cart_item} key={index}>
            <Text style={styles.swipe_text}>{item.name}</Text>
            <Text style={styles.swipe_text}>
              {item.getPriceStringFormat()} R$
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer_container}>
        <Text style={styles.swipe_text}>
          Preço total: {priceToString(total)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    maxHeight: 300,
  },
  swipe: {
    backgroundColor: 'white',
    height: 300,
  },
  cart_item: {
    height: 64,
    marginBottom: 2,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer_container: {
    height: 64,
    marginBottom: 2,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: '#EEE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
