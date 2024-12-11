/* eslint-disable */
import {createRef} from 'react';

export const routeRef = createRef<string>();

import {createNavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/types';

const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate<T extends keyof RootStackParamList>(
  screen: T,
  params?: RootStackParamList[T],
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(screen as any, params as any);
  }
}

export async function resetToBase() {
  navigationRef.resetRoot({
    routes: [{name: 'AppRoot'}],
  });
}

export default navigationRef;
