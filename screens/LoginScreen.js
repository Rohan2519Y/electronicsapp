import { useState } from "react";
import { View, Text, Dimensions, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { postData } from "../services/FetchNodeServices";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");

export default function LoginScreen() {
    const [mobile, setMobile] = useState("");
    const navigation = useNavigation()

    // const handlePress = async () => {
    //     var result = await postData('useraccount/check_account', { mobileno: mobile })

    //     if (result.status)
    //         navigation.navigate('otpinput', { data: result.data, flag: true })
    //     else
    //         navigation.navigate('otpinput', { data: result.data, mobile, flag: false })
    // }

    return (
        <View style={{ width: "100%", height: height, backgroundColor: "#2C3A47", alignItems: "center" }}>
            <View style={{ width: "100%", height: height * 0.4, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 35, color: "#ffffff", fontWeight: "bold" }}>SignIn To Croma</Text>
            </View>
            <View
                style={{
                    width: "90%",
                    height: 50,
                    alignItems: "center",
                    backgroundColor: "#ffffff",
                    flexDirection: "row",
                    borderRadius: 10,
                    paddingHorizontal: 10
                }}
            >
                <Icon name="mobile1" size={30} color="#000" />
                <TextInput
                    keyboardType='numeric'
                    value={mobile}
                    onChangeText={setMobile}
                    style={{ flex: 1, fontSize: 18, color: "#000", paddingVertical: 0 }}
                    placeholder="Enter Mobile or Email"
                    placeholderTextColor="grey"
                    cursorColor="#000"
                />
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('otpinput', { mobile })}
                disabled={mobile.length === 0}
                activeOpacity={0.7}
                style={{
                    borderRadius: 10,
                    height: 50,
                    width: "90%",
                    backgroundColor: mobile.length === 0 ? '#95a5a6' : "#1B9CFC",
                    marginTop: 50,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}
