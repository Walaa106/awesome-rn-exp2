import Setup from './src/boot/setup';
import { withTheme } from '@callstack/react-theme-provider';

export default withTheme(Setup);



// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { Container, Item, Input, Header, Body, Content, Title } from 'native-base';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
