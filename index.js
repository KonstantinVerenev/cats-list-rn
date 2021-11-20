import { Navigation } from "react-native-navigation";
import MainScreen from './src/screens/MainScreen';
import DetailScreen from './src/screens/DetailScreen';

Navigation.registerComponent('MainScreen', () => MainScreen);
Navigation.registerComponent('DetailScreen', () => DetailScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'MainScreen'
            }
          }
        ]
      }
    }
  });
});