import { createStackNavigator } from 'react-navigation';

import Tab from '../TabNavigator';
import SplashScreen from '../../screens/SplashScreen';
import PreviewScreen from '../../screens/PreviewScreen';

import NavigationOptionsWithHeader from './NavigationOptionsWithHeader';

export default createStackNavigator(
  {
    tab: Tab,
    splash: SplashScreen,
    preview: PreviewScreen,
  },
  NavigationOptionsWithHeader,
);
