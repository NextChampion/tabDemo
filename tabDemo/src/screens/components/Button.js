import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class Button extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string,
  };

  static defaultProps = {
    onPress: null,
    title: 'button',
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { title, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 30,
    borderRadius: 5,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
