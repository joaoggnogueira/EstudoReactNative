import React, {useRef} from 'react';

import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

export default props => {
  const heightAnim = useRef(new Animated.Value(200)).current;

  Animated.timing(heightAnim, {
    toValue: 0,
    duration: 250,
    useNativeDriver: true,
  }).start();

  const onClose = () => {
    Animated.timing(heightAnim, {
      toValue: 200,
      duration: 100,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      props.onClose();
    }, 100);
  };

  return (
    <View style={styles.overlay}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay_bg} />
      </TouchableWithoutFeedback>
      <Animated.View
        style={[styles.dialog, {transform: [{translateY: heightAnim}]}]}>
        {props.children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  overlay_bg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#00000044',
  },
  dialog: {
    height: 200,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
