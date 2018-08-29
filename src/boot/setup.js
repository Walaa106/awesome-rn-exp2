import Expo from 'expo';
import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './configureStore';

import colors from 'theme/common';
import { ThemeProvider } from '@callstack/react-theme-provider';

import AppNavigator from 'navigation/navigators';

class Setup extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false })),
      isReady: false,
    };
  }
  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady || this.state.isLoading) {
      return <Expo.AppLoading />;
    }

    return (
      <ThemeProvider theme={colors}>
        <Provider store={this.state.store}>
          <AppNavigator />
        </Provider>
      </ThemeProvider>
    );
  }
}

export default Setup;
