import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

enum LoaderSize {
  small = 'small',
  large = 'large',
}

type LoaderButtonProps = {
  title: string;
  buttonStyle: object;
  textStyle: object;
  isLoading: boolean;
  loaderSize: LoaderSize;
  loaderColor: string;
  onButtonClick: () => void;
};
const onPress = onButtonClick => {
  if (onButtonClick) {
    onButtonClick();
    return;
  }
  throw new Error('onButtonClick function is undefined');
};
const styles = StyleSheet.create({
  containerStyle: {
    height: 45,
  },
  buttonStyle: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    shadowColor: '#444444',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  textStyle: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
const LoaderButton = ({
  title = 'Title',
  buttonStyle,
  textStyle,
  isLoading = false,
  loaderSize = LoaderSize.small,
  loaderColor = 'black',
  onButtonClick,
}: LoaderButtonProps) => {
  if (!Object.values(LoaderSize).includes(loaderSize)) {
    throw new Error('loaderSize must be small or large');
  }
  return (
    <TouchableOpacity
      style={styles.containerStyle}
      onPress={() => onPress(onButtonClick)}>
      <View style={[styles.buttonStyle, buttonStyle]}>
        {isLoading ? null : (
          <Text style={[styles.textStyle, textStyle]}> {title} </Text>
        )}
        {isLoading ? (
          <ActivityIndicator size={loaderSize} color={loaderColor} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};
export default LoaderButton;
