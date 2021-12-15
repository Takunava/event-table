/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { WelcomeScreen } from './src/screens/WelcomeScreen';

AppRegistry.registerComponent(appName, () => WelcomeScreen);
