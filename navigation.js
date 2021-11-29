import { Navigation } from 'react-native-navigation';

import MainScreen from './src/screens/MainScreen';
import DetailScreen from './src/screens/DetailScreen';

import colors from './src/constants/colors';
import fonts from './src/constants/fonts';

export const MAIN_SCREEN = 'MainScreen';
export const DETAIL_SCREEN = 'DetailScreen';

Navigation.registerComponent(MAIN_SCREEN, () => MainScreen);
Navigation.registerComponent(DETAIL_SCREEN, () => DetailScreen);

export const rootNavigation = () => {
  void Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: MAIN_SCREEN,
            },
          },
        ],
      },
    },
  });
};

Navigation.setDefaultOptions({
  topBar: {
    title: {
      color: colors.lightGreen,
      fontFamily: fonts.mainBold,
      fontSize: 20,
    },
    backButton: {
      title: 'Назад',
      color: colors.lightGreen,
      fontFamily: fonts.main,
    },
    background: {
      color: colors.darkGreen,
    },
  },
});
