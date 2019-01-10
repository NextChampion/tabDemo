/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class SplashScreen extends Component<Props> {

  state = {
    number: 3,
  }

  setInterval = {};
  stateAvaliable = true;

  componentDidMount() {
    this.setInterval = setInterval(()=>{
      const { number } = this.state;
      const nextNumberState = number - 1;
      if (nextNumberState > 0 && this.stateAvaliable) {
        this.setState({number: nextNumberState});
      }
    }, 1000);
    setTimeout(()=>{
      const { navigation } = this.props;
      navigation.navigate('main');
    },3000);
  }

  componentWillUnount() {
    this.stateAvaliable = false;
    clearInterval(this.setInterval);
  }

  render() {
    const { number } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.content}>这是17号大小的文字</Text>
        <Text style={styles.instructions}>您还有{number}秒进入主页面</Text>
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
  content: {
    fontSize: 17,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 15,
  },
});
