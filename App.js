/**
 * Simple Hello World React Native App
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  SafeAreaView
} from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  helloWorld: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: 'white'
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;