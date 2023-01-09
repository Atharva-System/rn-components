import {InlineImageTextInput} from 'as-components';
import React, {PureComponent} from 'react';
import {View, SafeAreaView} from 'react-native';

const ic_email = require('../assets/ic_email.png');
class ExampleInlineImageTextInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errorMessage: '',
    };
  }
  handleChangeText = email => {
    this.setState({email: email});
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#F2F2F2', padding: 10}}>
          <InlineImageTextInput
            handleChangeText={this.handleChangeText}
            label="Enter Your Email"
            placeholder="Enter Your Email"
            keyboardType="email-address"
            icon={ic_email}
            value={this.state.email}
            isSecureTextEntry={false}
            errorMessage={this.state.errorMessage}
            customStyle={{fontSize: 16, color: 'black'}}
          />
        </View>
      </SafeAreaView>
    );
  }
}
export default ExampleInlineImageTextInput;
