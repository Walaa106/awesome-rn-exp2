import React, { Component } from 'react';
import {
  Container, Content, Header, Body, Title, Button, Text, View,
} from 'native-base';
import YsLogo from '../../theme/components/YsLogo';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Header style={{ height: 200 }}>
          <Body style={{ alignItems: 'center' }}>
            <YsLogo />
            <Title>Property Login</Title>
          </Body>
        </Header>

        <Content>
          {this.props.loginForm}
          <View padder>
            <Button block onPress={() => this.props.onLogin()}>
              <Text>Login</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
