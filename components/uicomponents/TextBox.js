import { View, TextInput, StyleSheet, Dimensions, Text } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons"
const { width, height } = Dimensions.get('window')
const style = StyleSheet.create({
    container: {
        // width:
    }
})

export default function TextBox({ w = .9, helperText = '', msg = '', type = 'text', error, icon }) {
    return (<>
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 5, padding: 2, width: width * w, borderWidth: 1, borderColor: error?'red':'grey', backgroundColor: '#fff', }}>
                <Icon name={icon} size={40} />
                <TextInput keyboardType={type} placeholder={msg} placeholderTextColor='grey' style={{ color: '#000' }} />
            </View>
            {error ? <Text style={{color:'red'}}>{helperText}</Text> : <></>}
        </View>
    </>)
}