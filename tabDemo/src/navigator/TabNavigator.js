import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Image } from 'react-native';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';

const TabNavigator = createBottomTabNavigator({
    One: TabOneScreen,
    Two: TabTwoScreen,
  });

TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const headerTitle = routeName;
  return { headerTitle };
};

export default TabNavigator;
