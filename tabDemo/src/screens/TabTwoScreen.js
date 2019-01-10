/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

type Props = {};
export default class TabTwoScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>TabTwoScreen</Text>
        <Image style={styles.image} source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547142830889&di=ccbf5d2105c5e02503ba6a1630a7c145&imgtype=0&src=http%3A%2F%2Fimg.tukexw.com%2Fimg%2Fd98893b85b36dfa4.jpg'}}/>
        <Text style={styles.instructions}>欢迎来到TabTwo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
