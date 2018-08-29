import EStyleSheet from 'react-native-extended-stylesheet';
// import color from 'color';

// import { Platform, Dimensions, PixelRatio } from 'react-native';

// const deviceHeight = Dimensions.get('window').height;
// const deviceWidth = Dimensions.get('window').width;
// const platform = Platform.OS;
// const platformStyle = undefined;

//- Set this globally
const colors = {
  $theme: 'yamsafer', // required variable for caching!
  $white: '#fff',
  // AndroidRipple
  $androidRippleColor: '#fff',
  $androidRippleColorDark: '#fff',

  // Badge
  $badgeBg: '#ED1727',
  $badgeColor: '#fff',

  // Button
  $btnDisabledBg: '#b5b5b5',
  $btnDisabledClr: '#f1f1f1',

  // CheckBox
  $checkboxBgColor: '#039BE5',
  $checkboxTickColor: '#fff',

  // Segment
  $segmentBackgroundColor: '#3F51B5',
  $segmentActiveBackgroundColor: '#fff',
  $segmentTextColor: '#fff',
  $segmentActiveTextColor: '#3F51B5',
  $segmentBorderColor: '#fff',
  $segmentBorderColorMain: '#3F51B5',

  // Card
  $cardDefaultBg: '#fff',

  // Color
  $brandPrimary: '#2B569F',
  $brandInfo: '#62B1F6',
  $brandSuccess: '#5cb85c',
  $brandDanger: '#d9534f',
  $brandWarning: '#f0ad4e',
  $brandSidebar: '#252932',

  // Footer
  $footerDefaultBg: '#2B569F',

  // FooterTab
  $tabBarTextColor: '#8bb3f4',
  $activeTab: '#007aff',
  $sTabBarActiveTextColor: '#007aff',
  $tabBarActiveTextColor: '#fff',
  $tabActiveBgColor: '#1569f4',

  // Tab
  $tabDefaultBg: '#2B569F',
  $topTabBarTextColor: '#b3c7f9',
  $topTabBarActiveTextColor: '#fff',
  $topTabActiveBgColor: '#1569f4',
  $topTabBarBorderColor: '#fff',
  $topTabBarActiveBorderColor: '#fff',

  // Header
  $toolbarBtnColor: '#fff',
  $toolbarDefaultBg: '#2B569F',
  $toolbarInputColor: '#fff',
  $toolbarInverseBg: '#222',
  $toolbarTextColor: '#fff',
  // InputGroup
  $inputBorderColor: '#D9D5DC',
  $inputSuccessBorderColor: '#2b8339',
  $inputErrorBorderColor: '#ed2f2f',
  // List
  $listBorderColor: '#c9c9c9',
  $listDividerBg: '#f4f4f4',
  $listBtnUnderlayColor: '#DDD',

  // Card
  $cardBorderColor: '#ccc',

  $listNoteColor: '#808080',

  // Progress Bar
  $defaultProgressColor: '#E4202D',
  $inverseProgressColor: '#1A191B',

  // Radio Button
  $radioSelectedColorAndroid: '#5067FF',

  $radioColor: '#7e7e7e',
  // Spinner
  $defaultSpinnerColor: '#45D56E',
  $inverseSpinnerColor: '#1A191B',

  // Tabs
  $tabBgColor: '#F8F8F8',
  $tabTextColor: '#222222',

  // Text
  $textColor: '#000',
  $inverseTextColor: '#fff',

  // Title
  $subtitleColor: '#FFF',

  // New Variable
  $titleFontColor: '#FFF',

  // Other
  $dropdownBg: '#000',
  $dropdownLinkColor: '#414142',
  $jumbotronBg: '#C9C9CE',
};

EStyleSheet.build(colors);

export default colors;
