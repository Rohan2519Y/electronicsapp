import { FlatList, View, Text, Dimensions, Image } from "react-native";
import { serverURL } from "../../services/FetchNodeServices";
var { width, height } = Dimensions.get('window')
export default function SliderComponent({ data }) {
    const CategoryView = ({ item }) => {
        return (<View style={{ marginTop: 10, marginLeft: 10, marginRight: 10, width: width * 0.29, height: width * 0.29, borderRadius: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: '90%', height: '90%', resizeMode: 'contain' }} source={{ uri: `${serverURL}/images/${item.image}` }} />
            <Text style={{ color: '#ffffff' }}>{item.categoryname}</Text>
        </View>)
    }
    return (<View>
        <FlatList horizontal data={data} renderItem={(item) => <CategoryView item={item.item} />} />
    </View>)
}