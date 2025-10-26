import { useState } from "react";
import { Dimensions, Text, TextInput, TouchableOpacity, View } from "react-native";
const { width, height } = Dimensions.get('window')
import Icon from 'react-native-vector-icons/Feather'
import { postData } from "../services/FetchNodeServices";
import { storeDatasync } from "../storage/AsyncDataStorage";

export default function LoginDetails({ route }) {

    const { mobile } = route.params

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [pin, setPin] = useState('')

    const handlePress = async () => {
        var body = { emailid: email, mobileno: mobile, username: first + ' ' + last, address: address, pincode: pin }
        var res = await postData('useraccount/submit_useraccount', body)
        if (res.status)
            await storeDatasync(mobile, JSON.stringify(body))
        else alert('not submitted')
    }

    return (
        <View style={{ width: '100%', height: height, backgroundColor: '#0a3d62', alignItems: 'center' }}>
            <View style={{ width: '95%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#ffffff', fontSize: 30, fontWeight: 'bold' }}>Create New Account</Text>
            </View>
            <View style={{ marginBottom: 20, width: '90%', height: 50, backgroundColor: '#ffffff', borderRadius: 5, flexDirection: 'row', alignItems: 'center' }}>
                <Icon name='user' size={28} style={{ marginLeft: 10, marginRight: 5 }} />
                <TextInput value={first} onChangeText={(e) => setFirst(e)} placeholder="Enter First Name" placeholderTextColor='grey' cursorColor='#000000' style={{ fontSize: 19, color: '#000000', height: '100%', flex: 1 }} />
            </View>
            <View style={{ marginBottom: 20, width: '90%', height: 50, backgroundColor: '#ffffff', borderRadius: 5, flexDirection: 'row', alignItems: 'center' }}>
                <Icon name='user' size={28} style={{ marginLeft: 10, marginRight: 5 }} />
                <TextInput value={last} onChangeText={(e) => setLast(e)} placeholder="Enter Last Name" placeholderTextColor='grey' cursorColor='#000000' style={{ fontSize: 19, color: '#000000', height: '100%', flex: 1 }} />
            </View>
            <View style={{ marginBottom: 20, width: '90%', height: 50, backgroundColor: '#ffffff', borderRadius: 5, flexDirection: 'row', alignItems: 'center' }}>
                <Icon name='mail' size={28} style={{ marginLeft: 10, marginRight: 5 }} />
                <TextInput value={email} onChangeText={(e) => setEmail(e)} placeholder="Enter Email Address" placeholderTextColor='grey' cursorColor='#000000' style={{ fontSize: 19, color: '#000000', height: '100%', flex: 1 }} />
            </View>
            <View style={{ marginBottom: 20, width: '90%', height: 50, backgroundColor: '#ffffff', borderRadius: 5, flexDirection: 'row', alignItems: 'center' }}>
                <Icon name='home' size={28} style={{ marginLeft: 10, marginRight: 5 }} />
                <TextInput value={address} onChangeText={(e) => setAddress(e)} placeholder="Enter Address" placeholderTextColor='grey' cursorColor='#000000' style={{ fontSize: 19, color: '#000000', height: '100%', flex: 1 }} />
            </View>
            <View style={{ marginBottom: 20, width: '90%', height: 50, backgroundColor: '#ffffff', borderRadius: 5, flexDirection: 'row', alignItems: 'center' }}>
                <Icon name='map-pin' size={28} style={{ marginLeft: 10, marginRight: 5 }} />
                <TextInput value={pin} onChangeText={(e) => setPin(e)} placeholder="Enter Pincode" placeholderTextColor='grey' cursorColor='#000000' style={{ fontSize: 19, color: '#000000', height: '100%', flex: 1 }} />
            </View>
            <TouchableOpacity
                disabled={first.length == 0 || last.length == 0 || email.length == 0 || pin.length == 0 || address.length == 0} activeOpacity={0.8} onPress={handlePress}
                style={{ marginTop: 50, height: 50, width: '90%', backgroundColor: first.length == 0 || last.length == 0 || email.length == 0 || pin.length == 0 || address.length == 0 ? '#4b4b4b' : '#474787', justifyContent: 'center', alignItems: 'center', borderRadius: 7 }}>
                <Text style={{ fontSize: 20, fontWeight: 500, color: first.length == 0 || last.length == 0 || email.length == 0 || pin.length == 0 || address.length == 0 ? '' : '#ffffff' }}>Create Account</Text>
            </TouchableOpacity>
        </View>
    )
}