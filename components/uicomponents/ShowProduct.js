import { FlatList, View, Text, Dimensions, Image } from "react-native";
import { serverURL } from "../../services/FetchNodeServices";
var { width, height } = Dimensions.get('window')

export default function ShowProduct({ data, title }) {

    const ProductView = ({ item }) => {
        return (<View style={{ width: width * .45, height: '90%', backgroundColor: '#646c77', borderRadius: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginRight: width * .025, marginLeft: width * .025 }}>
            <View style={{ width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ height: height * 0.15, width: width * .6, resizeMode: 'contain' }}
                    source={{ uri: `${serverURL}/images/${item.productpicture}` }} />
            </View>
        </View>)
    }

    return (<View style={{ width: width * 1, height: 300, backgroundColor: 'red', flexDirection: 'column' }}>
        <Text style={{ marginTop: 5, marginBottom: 5, marginLeft: width * .03, fontWeight: 'bold', fontSize: 20, color: '#ffffff' }}>{title}</Text>
        <FlatList horizontal data={data} renderItem={(item) => <ProductView item={item?.item} />} />
    </View >)

}