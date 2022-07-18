import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import React, { Component } from 'react'

import Routes from './src/navigations/Routes';

// const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    )
  }
}

const styles = StyleSheet.create({})