import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/*
Yarn/NPM Imports:
yarn add @react-navigation/native
yarn add @react-navigation/native-stack
yarn add react-native-screens react-native-safe-area-context
*/

// Page Imports
import Navigator from './src/Navigator';
import DesignPage from './src/styles/DesignPage';

export default function App() {
  return (
    // <Navigator/>
    <DesignPage/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
