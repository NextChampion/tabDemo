import { createStackNavigator } from 'react-navigation';

import Tab from '../TabNavigator';
// import OtherScreen from '../../screens/TabOneScreens/OtherScreen';
import SplashScreen from '../../screens/SplashScreen';
// import AllCookListScreen from '../screens/TabCookScreen/AllCookListScreen';

import NavigationOptionsWithHeader from './NavigationOptionsWithHeader';

export default createStackNavigator(
  {
    tab: Tab,
    splash: SplashScreen,
  },
  NavigationOptionsWithHeader,
);
