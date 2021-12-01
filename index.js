import { Navigation } from 'react-native-navigation';

import { rootNavigation } from './navigation';

Navigation.events().registerAppLaunchedListener(rootNavigation);
