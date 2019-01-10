/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

type Props = {};
export default class PreviewScreen extends Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <View style={styles.headerLeft}>
          <Text>返回</Text>
        </View>
      </TouchableOpacity>
    ),
    // header: null,
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>PreviewScreen</Text>
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
  headerLeft: {
    width: 60,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
