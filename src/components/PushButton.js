import React from 'react';
import {Button} from 'react-native';
import {useStateValue} from '../state';
import {colors} from '../colors';

export default props => {
  const dispatch = useStateValue()[1];

  const onPressLearnMore = () => {
    dispatch({
      type: 'push',
      item: props.item,
    });
  };

  return (
    <Button
      onPress={() => onPressLearnMore(props.item)}
      title="Colocar no carrinho"
      color={colors.secondary}
      accessibilityLabel="Learn more about this purple button"
    />
  );
};
