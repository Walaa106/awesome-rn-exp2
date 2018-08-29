import React from 'react';
import styles from './styles';
import { View } from 'react-native';
import { Button, Icon, Title } from 'react-native-elements';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Header>
          <Left> */}
        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
          <Icon name="menu" title="Button" />
        </Button>
        {/* </Left> */}
        {/* <Body> */}
        <Title>Home</Title>
        {/* </Body> */}
        {/* <Right /> */}
        {/* </Header> */}
        {/* <Content>
          <List>
            {this.props.list.map((item, i) => (
              <ListItem
                key={i}
                onPress={() =>
                  this.props.navigation.navigate('Home', {
                    name: { item },
                  })
                }
              >
                <Text>{item}</Text>
              </ListItem>
            ))}
          </List>
        </Content> */}
      </View>
    );
  }
}

export default Home;
