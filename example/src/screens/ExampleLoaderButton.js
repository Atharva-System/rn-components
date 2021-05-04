import React, {PureComponent} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {LoaderButton} from 'as-components';

class ExampleLoaderButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  onButtonClick = () => {
    this.setState({loading: true});
    clearTimeout(this.loadTime);
    this.loadTime = setTimeout(() => {
      this.setState({loading: false});
    }, 1000);
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#F2F2F2', padding: 10}}>
          <LoaderButton
            title="Login"
            isLoading={this.state.loading}
            onButtonClick={this.onButtonClick.bind(this)}
          />
        </View>
      </SafeAreaView>
    );
  }
}
export default ExampleLoaderButton;
