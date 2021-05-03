import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  button: {
    height: RFPercentage(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    paddingHorizontal: RFPercentage(2),
    opacity: 1,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: RFPercentage(2),
  },
});

export default class ReactButton extends Component {
  render() {
    const {
      onPress,
      label,
      backgroundColor,
      textColor,
      disabled,
      styleButton,
    } = this.props;

    return (
      <TouchableOpacity
        style={[styles.button, {backgroundColor}, styleButton]}
        onPress={() => onPress()}
        disabled={disabled}>
        <Text
          adjustsFontSizeToFit={true}
          style={[styles.buttonText, {color: textColor}]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  }
}
