import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FabButton from './FabButton';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import {useStateValue} from '../state';

export default props => {
  const dispatch = useStateValue()[1];

  const plusAction = () => {
    dispatch({
      type: 'push',
      item: props.item.product,
    });
  };
  const minusAction = () => {
    dispatch({
      type: 'pop',
      item: props.item.product,
    });
    if (props.item.quantity <= 0) {
      props.onClose();
    }
  };

  return (
    <View style={styles.dialog}>
      <View style={styles.header}>
        <Text style={[styles.text, styles.header_text]}>
          {props.item.product.name}
        </Text>
      </View>
      <View style={styles.content}>
        <FabButton icon={faMinus} onPress={minusAction} />
        <Text style={styles.text}>{props.item.quantity}</Text>
        <FabButton icon={faPlus} onPress={plusAction} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dialog: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_text: {
    fontSize: 18,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});
