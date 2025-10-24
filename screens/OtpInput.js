import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Text, Dimensions, TouchableOpacity, Alert } from 'react-native';

const { width, height } = Dimensions.get('window');

const OtpInput = ({ length = 4, onChangeOtp }) => {

  const [otp, setOtp] = useState(Array(length).fill(''));
  const [finalOtp, setFinalOtp] = useState('');
  const inputs = useRef([]);

  useEffect(() => {
    const generateOTP = () => parseInt((Math.random() * 8999) + 1000);
    const newOtp = generateOTP();
    setFinalOtp(newOtp);
    Alert.alert('Your OTP', newOtp.toString());
  }, []);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    onChangeOtp && onChangeOtp(newOtp.join(''));

    if (text && index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handlePress = () => {
    if (finalOtp.toString() === otp.join('')) {
      Alert.alert('✅ Correct OTP');
    } else {
      Alert.alert('❌ Wrong OTP');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>

      <View style={styles.inputRow}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputs.current[index] = el)}
            style={[
              styles.input,
              { borderColor: digit ? '#00A651' : '#CCCCCC' },
            ]}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            selectionColor="#00A651"
          />
        ))}
      </View>

      <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={handlePress}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#4b4b4b',
    height: height,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 25,
    marginTop: 50,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 25,
  },
  input: {
    width: 55,
    height: 60,
    borderWidth: 2,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#1C1C1C',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  btn: {
    width: '90%',
    height: 50,
    backgroundColor: '#e15f41',
    borderRadius: 7,
    alignSelf: 'center',
    marginTop: height * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OtpInput;
