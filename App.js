/**
 * Simple Hello World React Native App
 */

import React, { useState } from 'react';
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
  const [first, setFirst] = useState('')
  const [second, setSecond] = useState('')
  const [result, setResult] = useState('')
  const handleClick=()=>{
    setResult(parseInt(first)+parseInt(second))
  }

  return (<>
    <View style={{ width: '100%', height: '100%', backgroundColor: '#00bfffff', alignItems: 'center', gap: 10,paddingTop:50 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height:50, backgroundColor: '#ff00f7ff' }}>
        <TextInput placeholderTextColor='grey' style={{ backgroundColor: 'white', width: '90%', color: 'black', height: '90%', borderRadius: 10 }} onChangeText={(txt) => setFirst(txt)} placeholder='Enter Number' />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: 50, backgroundColor: '#ff00f7ff' }}>
        <TextInput placeholderTextColor='grey' style={{ backgroundColor: 'white', width: '90%', color: 'black', height: '90%', borderRadius: 10 }} onChangeText={(txt) => setSecond(txt)} placeholder='Enter Number' />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: 50, backgroundColor: '#00ff91ff' }}>
        <View style={{ width: '90%' }}><Button title="Add" onPress={handleClick} /></View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: 50, backgroundColor: '#c8ff00ff'}}>
        <Text style={{fontSize:20,fontWeight:600}}>Ans:{result}</Text>
      </View>
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