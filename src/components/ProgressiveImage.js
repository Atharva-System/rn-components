import React, { PureComponent } from "react";
import { View, StyleSheet, Animated } from "react-native";

class ProgressiveImage extends PureComponent {
  constructor(props) {
    super(props);
    this.thumbnailAnimated = new Animated.Value(0);
    this.imageAnimated = new Animated.Value(0);
    this.placeHolder = require("../../assets/placeholder.png");
  }

  handleThumbnailLoad = () => {
    Animated.timing(this.thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true,
      duration: 1000,
    }).start();
  };

  onImageLoad = () => {
    Animated.timing(this.imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
      duration: 1000,
    }).start();
  };

  render() {
    const {
      containerStyle,
      thumbnailSource,
      source,
      imageStyle,
      resizeMode = "stretch",
    } = this.props;

    return (
      <View
        style={[
          {
            backgroundColor: "#e1e4e8",
            height: "100%",
            width: "100%",
          },
          containerStyle,
        ]}
      >
        <Animated.Image
          source={thumbnailSource ? thumbnailSource : this.placeHolder}
          style={[
            styles.thumbStyle,
            { opacity: this.thumbnailAnimated },
            imageStyle,
          ]}
          onLoad={() => this.handleThumbnailLoad()}
          blurRadius={1}
          resizeMode={resizeMode}
        />
        <Animated.Image
          source={source}
          style={[
            {
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              opacity: this.imageAnimated,
            },
            imageStyle,
          ]}
          onLoad={() => this.onImageLoad()}
          resizeMode={resizeMode}
        />
      </View>
    );
  }
}

ProgressiveImage.defaultProps = {
  resizeMode: "stretch",
  thumbnailSource: undefined,
  source: undefined,
  containerStyle: {},
  imageStyle: {},
};

const styles = StyleSheet.create({
  thumbStyle: {
    width: "100%",
    height: "100%",
  },
});

export default ProgressiveImage;
