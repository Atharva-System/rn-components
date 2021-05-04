import React, { Component } from "react";
import { View, TextInput, Image, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";

import { colors } from "../style/colors";

export default class InlineImageTextInput extends Component {
  constructor(props) {
    super(props);
  }
  getFocus = () => {
    if (this.inputRef) {
      this.inputRef.focus();
    }
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
    } = this.props;
    return (
      <View>
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
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={(text) => handleChangeText(text)}
            value={value}
            secureTextEntry={isSecureTextEntry}
            editable={isEditable}
            pointerEvents={pointerEvent}
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
});
