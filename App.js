/**
 * Simple Hello World React Native App
 */

import React, { useState } from 'react';
import TextBox from './components/uicomponents/TextBox'
import {
  TextInput,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  SafeAreaView,
  Button
} from 'react-native';

function App() {

  return (<>
    <View style={{ margin: 10, padding: 10, gap: 10 }}>
      <TextBox icon="envelope" msg='Email Address' error={false} helperText='Pls Input Correct Value' />
      <TextBox icon="tag" msg='Your Name' error={false} helperText='Pls Input Correct Value' />
    </View>
  </>);
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