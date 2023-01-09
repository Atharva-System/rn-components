import React, {PureComponent} from 'react';
import {View, SafeAreaView} from 'react-native';
import {LoaderButton} from 'as-components';
class Examples extends PureComponent {
  constructor(props) {
    super(props);
  }
  onButtonClick = screen => {
    this.props.navigation.navigate(screen);
  };
  renderSeparator = () => {
    return <View style={{marginVertical: 10}} />;
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#F2F2F2', padding: 10}}>
          <LoaderButton
            title="LoaderButton"
            isLoading={false}
            onButtonClick={this.onButtonClick.bind(this, 'LoaderButton')}
          />
          {this.renderSeparator()}
          <LoaderButton
            title="ListLoadMore"
            isLoading={false}
            onButtonClick={this.onButtonClick.bind(this, 'ListLoadMore')}
          />
          {this.renderSeparator()}
          <LoaderButton
            title="InlineImageTextInput"
            isLoading={false}
            onButtonClick={this.onButtonClick.bind(
              this,
              'InlineImageTextInput',
            )}
          />
          {this.renderSeparator()}
        </View>
      </SafeAreaView>
    );
  }
}
export default Examples;
