import {createNavigationContainerRef} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(...args) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(...args);
  }
}

export function push(...args) {
  if (navigationRef.isReady()) {
    console.log(...args);
    navigationRef.dispatch(StackActions.push(...args));
  }
}
