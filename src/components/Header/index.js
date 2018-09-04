import React from 'react';
import PropTypes from 'prop-types';
import { translate} from 'react-i18next';
import { I18nManager } from 'react-native';
import YsLogo from 'theme/components/YsLogo';
import { Header, Content, H3, Left, Right, Text, View } from 'native-base';

import styles from './styles';

const propTypes = {
	t: PropTypes.func,
  i18n: PropTypes.object
};

const onChangeLang = () => {
	const lang = I18nManager.isRTL ? 'en' : 'ar'
	I18nManager.allowRTL(!I18nManager.isRTL);
	I18nManager.forceRTL(!I18nManager.isRTL);
	Expo.Util.reload();
}

const index = ({ t, i18n }) => {
  return (
		<View>
			<Header>
				<Left />
				<Right>
					<Text onPress={() => onChangeLang()} style={{color: '#fff'}}>
						{ t('common:language', { lng: i18n.language }) }
					</Text>
				</Right>
			</Header>
			<Header>
				<Left><YsLogo /></Left>
			</Header>
			<Header style={{ paddingBottom: 30 }}>
				<Left><H3> {t('login:property-login')} </H3></Left>
			</Header>
		</View>
  );
};

index.propTypes = propTypes;

export default translate(['common'], { wait: true })(index);
