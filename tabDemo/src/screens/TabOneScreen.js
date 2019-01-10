/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { NavigationActions } from 'react-navigation';

import Button from './components/Button';

type Props = {};
export default class TabOneScreen extends Component<Props> {
  onButtonClick = () => {
    const { navigation } = this.props;
    navigation.navigate('preview',{
      toTabTwo: this.toTabTwo,
    });
  }

  toTabTwo = () => {
    const { navigation } = this.props;
    console.log('toTabTwo',navigation);
    navigation.dispatch(
      NavigationActions.navigate({ routeName:'Two' }),
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>点击下方按钮查看预览页</Text>
        <Button title="Modal" onPress={this.onButtonClick}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
