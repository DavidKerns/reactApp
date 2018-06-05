/**
 * MovieApp
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation';

import Welcome from './source/screens/welcome';
import MovieList from './source/screens/movie-list';

const RootStack = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null
    }
  },
  MovieList: {
    screen: MovieList,
    navigationOptions: {
      header: null
    }
  }
})
export default class App extends Component {
  render() {
    return (
    <RootStack />
    );
  }
}
