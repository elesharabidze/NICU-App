import navigationRef from '../utils/navigationRef';

const onStateChange = async (routeNameRef: React.MutableRefObject<string>) => {
  const previousRouteName = routeNameRef?.current;
  const currentRouteName = navigationRef.current?.getCurrentRoute()?.name || '';

  if (previousRouteName !== currentRouteName) {
    // Save the current route name for later comparison
    routeNameRef.current = currentRouteName;
  }
};

const DefaultNavigationOptions = {
  headerShown: false,
  // presentation: 'card',
  // contentStyle: { backgroundColor: '#FBFBFE' },
  // customAnimationOnGesture: true,
  // gestureEnabled: false,
  // animation: 'simple_push',
};

export {DefaultNavigationOptions, onStateChange};
