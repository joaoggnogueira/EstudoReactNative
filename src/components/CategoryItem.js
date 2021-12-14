import React from 'react';
import {Text, StyleSheet, View, Image, TouchableHighlight} from 'react-native';
import {colors} from '../colors.js';

export default props => (
  <TouchableHighlight
    activeOpacity={1}
    underlayColor="transparent"
    onPress={() => {
      props.onPress(props.item);
    }}>
    <View style={[styles.elevation, styles.view]}>
      {props.item.ammount ? (
        <View style={styles.amount_badge}>
          <Text style={styles.amount_badge_text}>{props.item.ammount}</Text>
        </View>
      ) : null}
      <Image style={styles.imagewrap} source={{uri: props.item.image_uri}} />
      <View style={styles.content}>
        <View style={styles.nametag}>
          <Text style={styles.nametag_text}>{props.item.name}</Text>
        </View>
        <View style={styles.flexGrow} />
        <View style={styles.pricetag}>
          <Text style={styles.pricetag_text}>
            {'a partir de ' + props.item.getPriceStringFormat() + ' R$'}
          </Text>
        </View>
      </View>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  view: {
    width: '100%',
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#FAFAFA',
  },
  content: {
    flexDirection: 'row',
    padding: 12,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: colors.secondary,
  },
  amount_badge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    zIndex: 2,
    position: 'absolute',
    right: 0,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  amount_badge_text: {
    fontWeight: '900',
    color: colors.primary,
  },
  imagewrap: {
    width: '100%',
    height: 128,
    resizeMode: 'cover',
  },
  nametag: {
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 8,
    justifyContent: 'center',
  },
  flexGrow: {
    flex: 1,
  },
  nametag_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    marginVertical: 8,
  },
  elevation: {
    elevation: 10,
    shadowColor: '#000000',
  },
  pricetag: {
    height: 32,
    alignItem: 'center',
    justifyContent: 'center',
  },
  pricetag_text: {
    color: 'white',
    textAlign: 'center',
  },
});
