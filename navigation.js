import { Navigation } from "react-native-navigation";

import MainScreen from './src/screens/MainScreen';
import DetailScreen from './src/screens/DetailScreen';

export const MAIN_SCREEN = 'MainScreen';
export const DETAIL_SCREEN = 'DetailScreen';

Navigation.registerComponent(MAIN_SCREEN, () => MainScreen);
Navigation.registerComponent(DETAIL_SCREEN, () => DetailScreen);

export const rootNavigation = async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: MAIN_SCREEN
            }
          }
        ]
      }
    }
  });
};
