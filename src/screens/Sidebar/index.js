import React from 'react';

import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import { NavigationActions, StackActions } from 'react-navigation';

const routes = [
  {
    name: 'Home',
    caption: 'Home',
    icon: 'av-timer',
  },
  {
    name: 'Login',
    caption: 'Logout',
    icon: 'flight-takeoff',
  },
];

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Login' })],
});

export default class Sidebar extends React.Component {
  render() {
    return (
      <View>
        <List>
          {routes.map(route => (
            <ListItem
              key={route.name}
              title={route.name}
              leftIcon={{ name: item.icon }}
              onPress={() => {
                route.name === 'Login'
                  ? this.props.navigation.dispatch(resetAction)
                  : this.props.navigation.navigate(route.name);
              }}
            />
          ))}
        </List>
      </View>
    );
  }
}
