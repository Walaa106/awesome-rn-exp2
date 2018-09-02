import React, { Component } from 'react';
import { I18nManager } from 'react-native';
import {
  Container, Content, Header, Body, Title, Button, Text, View,
} from 'native-base';
import YsLogo from 'theme/components/YsLogo';
import styles from './styles';

import i18next from 'i18next';

import { translate} from 'react-i18next';
import i18n from 'i18next';

class Login extends Component {

  async onChangeLang() {
    const lang = I18nManager.isRTL ? 'en' : 'ar'
    i18n.changeLanguage(lang);
    I18nManager.allowRTL(!I18nManager.isRTL);
    I18nManager.forceRTL(!I18nManager.isRTL);
    Expo.Util.reload();
  }

  render() {
    const { t, i18n, navigation } = this.props;
    const { navigate } = navigation;

    return (
        <Container>
          <Header style={{height: '40%'}}>
            <Body>
              <YsLogo />
              <Title>Property Login</Title>
            </Body>
          </Header>

          <Content>
            {this.props.loginForm}
            <View style={styles.footer}>
              <Text
                style={{ color: '#fff' }}
                onPress={() => this.props.navigation.navigate('Home')}
              >{t('login:forget-password')}</Text>
              <Text onPress={() => this.onChangeLang()} >{ t('common:language', { lng: i18n.language }) }</Text>
              <Button block onPress={() => this.props.onLogin()} info>
                <Text>{t('login:login')}</Text>
              </Button>
            </View>
          </Content>
        </Container>
    );
  }
}

export default translate(['home', 'common'], { wait: true })(Login);
