import React, { useState } from 'react';
import TextBox from './components/uicomponents/TextBox'
import MyButton from './components/uicomponents/MyButton'
import {
  TextInput,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

function App() {
  const handleClick=()=>{
    alert('hi')
  }
  return (<>
    <View style={{ margin: 10, padding: 10, gap: 10 }}>
      <TextBox icon="mail" msg='Email Address' error={false} helperText='Pls Input Correct Value' />
      <TextBox icon="tag" msg='Your Name' error={false} helperText='Pls Input Correct Value' />
      <TextBox icon="lock" password={true} msg='Enter Password' error={false} helperText='Pls Input Correct Value' />
      <TextBox icon="lock" msg='Enter Mobile Number' error={false} type='phone-pad' helperText='Pls Input Correct Value' />
      <MyButton msg='Login' onPress={handleClick}/>
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