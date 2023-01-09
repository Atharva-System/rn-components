import React, {PureComponent} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {ListLoadMore, LoaderButton} from 'as-components';

class ExampleListLoadMore extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      //Loading state used while loading the data for the first time
      serverData: [],
      //Data Source for the FlatList
      fetching_from_server: false,
      //Loading state used while loading more data
      isAllDataFetched: false,
      currentPage: 1,
    };
  }
  componentDidMount() {
    fetch(
      `https://reqres.in/api/users?per_page=1&&page=${this.state.currentPage}`,
    )
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson) {
          const {page, per_page, total, total_pages, data} = responseJson;
          this.setState({
            serverData: page == 1 ? data : [...this.state.serverData, ...data],
            loading: false,
            isAllDataFetched: page >= total_pages && data.length <= 0,
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  loadMoreData = (page, isAllDataFetched) => {
    //On click of Load More button We will call the web API again

    if (!isAllDataFetched) {
      this.setState({currentPage: this.state.currentPage + 1}, () => {
        this.setState({fetching_from_server: true}, () => {
          //fetch('http://aboutreact.com/demo/getpost.php?offset=' + this.offset)
          fetch(
            `https://reqres.in/api/users?per_page=1&&page=${this.state.currentPage}`,
          )
            .then(response => response.json())
            .then(responseJson => {
              if (responseJson) {
                const {page, per_page, total, total_pages, data} = responseJson;

                this.setState({
                  serverData:
                    page == 1 ? data : [...this.state.serverData, ...data],
                  loading: false,
                  fetching_from_server: false,
                  isAllDataFetched: page >= total_pages && data.length <= 0,
                });
              }
            })
            .catch(error => {
              console.error(error);
            });
        });
      });
    }
  };

  renderFooter() {
    return (
      //Footer View with Load More button
      <View style={styles.footer}>
        <LoaderButton
          activeOpacity={0.9}
          onButtonClick={this.loadMoreData}
          title="Loading"
          isLoading={this.state.fetching_from_server}
          //On Click of button calling loadMoreData function to load more data
          buttonStyle={styles.loadMoreBtn}
          textStyle={styles.btnText}
        />
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          {this.state.loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <ListLoadMore
              listStyle={{width: '100%'}}
              keyExtractor={(item, index) => index}
              data={this.state.serverData}
              renderItem={(item, index) => (
                <View style={styles.item}>
                  <Text style={styles.text}>
                    {item.email}
                    {':'}
                    {item.first_name} {item.last_name}
                  </Text>
                </View>
              )}
              onNextPageLoad={this.loadMoreData}
              reachedThreshHold={0.1}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              ListFooterComponent={this.renderFooter.bind(this)}
              isAllDataFetched={this.state.isAllDataFetched}
              //Adding Load More button as footer component
            />
          )}
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  item: {
    padding: 10,
  },
  separator: {
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});
export default ExampleListLoadMore;
