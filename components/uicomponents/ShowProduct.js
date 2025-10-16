import { FlatList, View, Text, Dimensions, Image, Button, TouchableOpacity } from "react-native";
import { serverURL } from "../../services/FetchNodeServices";
var { width, height } = Dimensions.get('window')
import Icon from "react-native-vector-icons/FontAwesome5"
import { useNavigation } from '@react-navigation/native';
export default function ShowProduct({ data, title, props }) {

    const navigation = useNavigation()
    const dis = (op, dp) => (((op - dp) / op) * 100).toFixed(2)
    const handleNavigate = (item) => {
        navigation.navigate('productdetails', { item, props })
    }

    const ProductView = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => handleNavigate(item)}>
                <View style={{ width: width * .45, height: 250, marginVertical: 10, backgroundColor: '#2c3e50', borderRadius: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginRight: width * .025, marginLeft: width * .025 }}>
                    <View style={{ width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ height: height * 0.15, width: width * .6, resizeMode: 'contain' }}
                            source={{ uri: `${serverURL}/images/${item.productpicture}` }} />
                        <View style={{ height: height * .07, width: '90%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text numberOfLines={1} style={{ fontWeight: 'semibold', color: '#ffffff' }}>{item.productname}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text numberOfLines={1} style={{ fontWeight: 'semibold', color: '#ffffff', textDecorationLine: 'line-through' }}>₹ {item.price}</Text>
                                <Text style={{ color: '#ffffff', marginLeft: 6, color: '#FFC312', fontWeight: 'bold' }}><Image style={{ width: 14, height: 14 }} source={require("../../assets/down.png")} />{dis(item.price, item.offerprice)} % off </Text>
                            </View>
                            <Text numberOfLines={1} style={{ fontWeight: 'semibold', color: '#ffffff' }}>₹ {item.offerprice}</Text>
                        </View>
                        <View style={{ height: 'auto', width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity activeOpacity={0.5} style={{ width: '47%', borderRadius: 10, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#192a56' }}><Text style={{ fontSize: 14, fontWeight: 'bold', color: '#ffffff' }}>Add To Cart</Text></TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5} style={{ width: '47%', borderRadius: 10, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2ecc71' }}><Text style={{ fontSize: 14, fontWeight: 'bold', }}>Buy Now</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }



    return (<View style={{ marginTop: 10 }}>
        <Text style={{ marginTop: 5, marginBottom: 5, marginLeft: width * .03, fontWeight: 'bold', fontSize: 20, color: '#ffffff' }}>{title}</Text>
        <FlatList numColumns={2} data={data} renderItem={(item) => <ProductView item={item?.item} />} />
    </View >)

}