/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createStackNavigator, createAppContainer } from "react-navigation";

import AllItems from "./comps/allItems";
import SelectedItem from "./comps/selectedItem";

const AppNavigator = createStackNavigator({
    ScreenAllItems : {
      screen: AllItems,
    },
    ScreenSelectedItem: {
      screen: SelectedItem
    }
  },
  {
    initialRouteName: "ScreenAllItems",
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
  } ,
  {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
  }
  );

const AppContainer = createAppContainer( AppNavigator );

export default class App extends Component<Props> {
  render() {
    return <AppContainer/>
  }
}
