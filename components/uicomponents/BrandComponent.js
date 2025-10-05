import { FlatList, View, Text, Dimensions, Image } from "react-native";
import { serverURL } from "../../services/FetchNodeServices";
var { width, height } = Dimensions.get('window')
export default function BrandComponent({ data }) {
    const BrandView = ({ item }) => {
        return (
            <View style={{ marginTop: 10, width: width * 0.2, height: width * 0.2, borderRadius: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ width: '85%', height: '85%', resizeMode: 'contain' }} source={{ uri: `${serverURL}/images/${item.logo}` }} />
                <Text style={{ color: '#ffffff' }}>{item.brandname}</Text>
            </View>
        )
    }
    return (
        <View style={{ flexDirection: 'column' }}>
            <Text style={{ color: 'white', marginLeft: 10, fontWeight: 'bold', fontSize: 18 }}>Top Brands</Text>
            <FlatList horizontal data={data} renderItem={(item) => <BrandView item={item.item} />} />
        </View>)
}