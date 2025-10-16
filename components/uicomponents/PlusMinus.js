import { View, Text, TouchableOpacity, Dimensions } from "react-native"
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons'

export default function PlusMinus({ handlePlus, handleMinus, onChange, num }) {


    return (
        <View style={{ width: '45%', height: '90%', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#192a56', borderRadius: 10, flexDirection: 'row' }}>
            <TouchableOpacity onPress={handlePlus} activeOpacity={0.7} style={{ width: width * .09, height: width * .09, borderWidth: 1, borderColor: '#00e9bf', borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name='add' color='#ffffff' size={20} ></Icon>
            </TouchableOpacity>
            <View style={{ width: width * .09, height: width * .09, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#ffffff', fontSize: 20 }}>{num}</Text>
            </View>
            <TouchableOpacity onPress={handleMinus} activeOpacity={0.7} style={{ width: width * .09, height: width * .09, borderWidth: 1, borderColor: '#00e9bf', borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name='remove' color='#ffffff' size={20} ></Icon>
            </TouchableOpacity>
        </View>)
}