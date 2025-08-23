import { Dimensions, View, Text, TouchableOpacity } from "react-native";
const { width, height } = Dimensions.get('window')

export default function MyButton({ msg, w, bg = 'green',onPress=()=>{}, ...props }) {
    return (<>
        <TouchableOpacity onPress={onPress}>
            <View style={{ width: width * w, height: 50, color: '#fff', backgroundColor: bg, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 18, color: '#fff' }}>{msg}</Text>
            </View>
        </TouchableOpacity>
    </>)
}