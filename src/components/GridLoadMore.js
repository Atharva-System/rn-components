import React, { PureComponent } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from "react-native";

class GridLoadMore extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      isViewFooter: false,
      isAllDataFetched: props.isAllDataFetched,
      loaderSize: props.loaderSize ? props.loaderSize : "large",
      loaderColor: props.loaderColor ? props.loaderColor : "black",
    };
  }

  renderItem = (item, index) => {
    let numColumn = this.props.numColumn ? this.props.numColumn : 2;
    if (this.props.renderItem) {
      return (
        <View
          style={{
            flex: 1 / numColumn,
            maxWidth: Dimensions.get("screen").width / numColumn,
          }}
        >
          {this.props.renderItem(item, index)}
        </View>
      );
    } else {
      return null;
    }
  };

  onRefresh = () => {
    this.setState({ page: 1, refreshing: true }, () => {
      /**
       * Executed when onRefresh called for Refresh
       */
      if (this.props.onRefreshList) {
        this.props.onRefreshList(this.state.page);
      }
    });
  };

  onNextPageLoad = () => {
    if (!this.state.isAllDataFetched) {
      this.setState(
        {
          page: this.state.page + 1,
          isViewFooter: true,
        },
        () => {
          /**
           * Executed when reachedThreshHold reached ThreadHold
           * @page - next page number next data
           * @isAllDataFetched is boolean flag for all data fetched
           */
          if (this.props.onNextPageLoad) {
            this.props.onNextPageLoad(
              this.state.page,
              this.state.isAllDataFetched
            );
          }
        }
      );
    } else {
      this.setState({ isViewFooter: false });
    }
  };

  renderFooter = () => {
    return (
      <View
        style={{ justifyContent: "center", alignItems: "center", padding: 10 }}
      >
        <ActivityIndicator
          color={this.state.loaderColor}
          size={this.state.loaderSize}
        />
      </View>
    );
  };

  componentDidUpdate(prevProps) {
    if (prevProps.isAllDataFetched !== this.props.isAllDataFetched) {
      this.setState(
        {
          isAllDataFetched: this.props.isAllDataFetched,
        },
        () => {
          if (this.state.isAllDataFetched) {
            this.setState({ isViewFooter: false });
          }
        }
      );
    }
    if (prevProps.loaderSize !== this.props.loaderSize) {
      this.setState({ loaderSize: this.props.loaderSize });
    }
    if (prevProps.loaderColor !== this.props.loaderColor) {
      this.setState({ loaderColor: this.props.loaderColor });
    }
  }

  render() {
    const {
      data,
      containerStyle,
      refreshing,
      listStyle,
      reachedThreshHold,
      numColumn,
    } = this.props;

    return (
      <View style={[styles.container, containerStyle]}>
        <FlatList
          {...this.props}
          style={[styles.viewFlatList, listStyle]}
          data={data}
          refreshing={refreshing ? refreshing : false}
          renderItem={({ item, index }) => this.renderItem(item, index)}
          onRefresh={() => this.onRefresh()}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={reachedThreshHold ? reachedThreshHold : 0.01}
          onEndReached={() => this.onNextPageLoad()}
          onMomentumScrollBegin={() => this.setState({ isViewFooter: true })}
          ListFooterComponent={
            this.props.renderFooter
              ? this.state.isViewFooter
                ? this.props.renderFooter
                : null
              : this.state.isViewFooter
              ? this.renderFooter.bind(this)
              : null
          }
          numColumns={numColumn ? numColumn : 2}
          columnWrapperStyle={{ flex: 1, justifyContent: "flex-start" }}
        />
      </View>
    );
  }
}

GridLoadMore.defaultProps = {
  data: [],
  containerStyle: {},
  listStyle: {},
  refreshing: false,
  reachedThreshHold: 0.01,
  numColumn: 2,
  loaderSize: "small",
  loaderColor: "black",
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  viewFlatList: { flex: 1 },
});

export default GridLoadMore;
