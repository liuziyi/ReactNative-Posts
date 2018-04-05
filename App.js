import React from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Welcome from './components/Welcome';
import Main from './components/Main';

export default class App extends React.Component {
  render() {
    return (
      <MainStack/>
    );
  }
}

export const MainStack = StackNavigator({
  Welcome: {
    screen: Welcome 
  },
  Main: {
    screen: Main
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
