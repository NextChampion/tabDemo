import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import SplashScreen from '../screens/SplashScreen';
import MainNavigator from './MainNavigator';

const RootNavigator = createSwitchNavigator({
  splash: SplashScreen,
  main: MainNavigator,
});

export default createAppContainer(RootNavigator);
