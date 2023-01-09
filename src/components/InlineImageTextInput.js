import React, { Component } from "react";
import { View, TextInput, Image, Text, Animated } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";

import { colors } from "../style/colors";

class InlineImageTextInput extends Component {
  constructor(props) {
    super(props);
    this.moveText = new Animated.Value(0);
    this.state = { inputValue: props.value };
  }
  getFocus = () => {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  };
  getBlur = () => {
    if (this.inputRef) {
      this.inputRef.blur();
    }
  };
  componentDidMount() {
    if (this.state.inputValue !== "") {
      this.moveTextTop();
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.value != this.props.value) {
      this.setState({ inputValue: this.props.value }, () => {
        if (this.state.inputValue !== "") {
          this.moveTextTop();
        } else if (this.state.inputValue === "") {
          this.moveTextBottom();
        }
      });
    }
  }
  onFocusHandler = () => {
    if (this.state.inputValue !== "") {
      this.moveTextTop();
    }
  };
  onBlurHandler = () => {
    if (this.state.inputValue === "") {
      this.moveTextBottom();
    }
  };
  moveTextTop = () => {
    Animated.timing(this.moveText, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };
  moveTextBottom = () => {
    Animated.timing(this.moveText, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };
  render() {
    const {
      handleChangeText,
      placeholder,
      keyboardType,
      icon = null,
      value,
      isSecureTextEntry = false,
      errorMessage,
      isSubDomain = false,
      isEditable = true,
      pointerEvent = "auto",
      subDomain = ".ensurexper.com",
      customStyle = {},
      label,
    } = this.props;
    const yVal = this.moveText.interpolate({
      inputRange: [0.4, 2],
      outputRange: [4, -20],
    });
    const animStyle = {
      transform: [
        {
          translateY: yVal,
        },
      ],
    };

    return (
      <View>
        {label && (
          <Animated.View style={[styles.animatedStyle, animStyle]}>
            <Text
              style={[
                styles.txtLabel,
                {
                  fontSize:
                    this.state.inputValue == undefined ||
                    this.state.inputValue == ""
                      ? RFPercentage(2.2)
                      : RFPercentage(1.7),
                },
              ]}
            >
              {label}
            </Text>
          </Animated.View>
        )}

        <View
          style={[styles.container, errorMessage ? styles.bottomBorder : null]}
        >
          {icon ? (
            <Image source={icon} style={styles.image} resizeMode="contain" />
          ) : null}
          <TextInput
            ref={(ref) => (this.inputRef = ref)}
            {...this.props}
            style={[styles.inputBox, customStyle]}
            // placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={(text) => handleChangeText(text)}
            value={this.state.inputValue}
            secureTextEntry={isSecureTextEntry}
            editable={isEditable}
            pointerEvents={pointerEvent}
            onFocus={this.onFocusHandler}
            onBlur={this.onBlurHandler}
          />
          {isSubDomain ? (
            <Text style={[styles.subLabelInputBox, customStyle]}>
              {subDomain}
            </Text>
          ) : null}
        </View>
        <Text style={[styles.errorText, customStyle]}>{errorMessage}</Text>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 40,
    borderBottomWidth: 0.5,
    marginTop: 4,
  },
  image: {
    marginTop: 8,
    marginRight: 12,
    height: 20,
    width: 20,
    alignItems: "center",
  },
  inputBox: {
    flex: 1,
    fontSize: RFPercentage(2.2),
  },
  inputBoxWithError: {
    marginLeft: 12,
    fontSize: RFPercentage(2.2),
    borderBottomColor: colors.RED,
  },
  errorText: {
    marginTop: 1,
    color: colors.RED,
    fontSize: RFPercentage(1.8),
    height: 16,
  },
  bottomBorder: {
    borderBottomColor: colors.RED,
    borderBottomWidth: 1,
  },
  subLabelInputBox: {
    position: "absolute",
    right: 0,
    alignItems: "center",
    marginTop: 8,
    fontWeight: "bold",
    fontSize: RFPercentage(1.8),
    color: colors.SALTBOX_GREY,
  },
  animatedStyle: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  txtLabel: {
    fontSize: RFPercentage(2.2),
    color: colors.LIGHT_GREY,
  },
});

export default InlineImageTextInput;
