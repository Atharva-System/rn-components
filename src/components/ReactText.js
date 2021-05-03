import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

export default class ReactText extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    textStyle: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
       PropTypes.shape({}),
    ]).isRequired,
    buttonStyle: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]).isRequired,
  }

  render() {
    const { textStyle, buttonStyle, content } = this.props;      
    return (
      <TouchableOpacity style={buttonStyle}>
        <Text style={textStyle}>{content}</Text>
      </TouchableOpacity>
    );
  }
}
  