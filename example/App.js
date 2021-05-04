import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExampleLoaderButton from './src/screens/ExampleLoaderButton';
import Examples from './src/screens/Examples';
import ExampleListLoadMore from './src/screens/ExampleListLoadMore';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Examples} />
        <Stack.Screen name="LoaderButton" component={ExampleLoaderButton} />
        <Stack.Screen name="ListLoadMore" component={ExampleListLoadMore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
