import { Dimensions, Text, TextInput, View } from "react-native";
const { width, height } = Dimensions.get('window')
import Icon from 'react-native-vector-icons/Feather'

export default function LoginDetails() {
    return (
        <View style={{ width: '100%', height: height, backgroundColor: '#0a3d62', alignItems: 'center' }}>
            <View style={{ width: '95%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#ffffff', fontSize: 30, fontWeight: 'bold' }}>Create New Account</Text>
            </View>
            <View style={{ width: '90%', height: 50, backgroundColor: '#ffffff', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Icon name='user' size={30} style={{ marginLeft: 10, marginRight: 5 }} />
                <TextInput placeholder="First Name" placeholderTextColor='grey' style={{ fontSize: 20 }} />
            </View>
            <View style={{ width: '90%', height: 50, backgroundColor: '#ffffff', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Icon name='user' size={30} style={{ marginLeft: 10, marginRight: 5 }} />
                <TextInput placeholder="First Name" placeholderTextColor='grey' style={{ fontSize: 20 }} />
            </View>
            <View style={{ width: '90%', height: 50, backgroundColor: '#ffffff', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Icon name='user' size={30} style={{ marginLeft: 10, marginRight: 5 }} />
                <TextInput placeholder="First Name" placeholderTextColor='grey' style={{ fontSize: 20 }} />
            </View>
        </View>
    )
}