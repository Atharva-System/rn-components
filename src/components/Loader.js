import React, {Component} from 'react';
import {StyleSheet, View, Modal, ActivityIndicator} from 'react-native';

export default class Loader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      isLoading = false,
      backgroundColor = '#00000040',
      indicatorColor = '#FFFFFF',
      size = 'small',
    } = this.props;

    return (
      <Modal
        transparent={true}
        animationType={'none'}
        visible={isLoading}
        onRequestClose={() => {
          console.log('close modal');
        }}>
        <View style={[styles.modalBackground, {backgroundColor}]}>
          <View
            style={[
              styles.activityIndicatorWrapper,
              {backgroundColor: indicatorColor},
            ]}>
            <ActivityIndicator animating={isLoading} size={size} />
          </View>
        </View>
      </Modal>
    );
  }
}

export const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  activityIndicatorWrapper: {
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
