import { useState } from "react";
import { View, TextInput, StyleSheet, Dimensions, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo"
const { width, height } = Dimensions.get('window')
const style = StyleSheet.create({
    container: {
        // width:
    }
})

export default function TextBox({ w = .9, helperText = '', msg = '', type = 'text', error, password, icon, ...props }) {
    const [color, setColor] = useState('grey')
    const [eyeIcon, setEyeIcon] = useState('eye')
    const [showPassword, setShowPassword] = useState(false)
    const handleEyeClick = () => {
        if (!showPassword) {
            setEyeIcon('eye-with-line')
            setShowPassword(true)
        }
        else {
            setEyeIcon('eye')
            setShowPassword(false)
        }
    }
    return (<>
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 5, padding: 2, width: width * w, borderWidth: 1, borderColor: error ? '#ff4757' : color, backgroundColor: '#fff', }}>
                <Icon name={icon} size={30} />
                <TextInput secureTextEntry={!showPassword} onFocus={() => { setColor('darkgreen') }} onBlur={() => { setColor('grey') }} {...props} keyboardType={type} placeholder={msg} placeholderTextColor='grey' style={{ color: '#000', fontSize: 16, width: password ? '80%' : '100%' }} />
                {password ? <Icon onPress={handleEyeClick} style={{ marginLeft: 'auto', marginRight: 10 }} size={22} name={eyeIcon} /> : <></>}
            </View>
            {error ? <Text style={{ color: '#ff4757' }}>{helperText}</Text> : <></>}
        </View>
    </>)
}