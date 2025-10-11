import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { postData } from "../../services/FetchNodeServices";

export default function ProductColorDetails({ item }) {
    console.log('itreeeeam', item.productid)
    const [details, setDetails] = useState([])
    const [select, setSelect] = useState(item.productdetailsid)

    const fetchProductDetails = async () => {
        var result = await postData('userinterface/fetch_product_details_by_productid', { productid: item.productid })
        setDetails(result.data)
    }

    useEffect(function () {
        fetchProductDetails()
    }, [])

    return (<View style={{ width: '100%' }}>
        <Text style={{ color: 'white', marginLeft: 10, fontSize: 16, fontWeight: 'bold', marginVertical: 10 }}>Brand Color</Text>
        <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
            {details.map((item) => (
                <View>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => setSelect(item.productdetailsid)} style={{ paddingHorizontal: 25, paddingVertical: 10, borderRadius: 5, borderWidth: 1, borderColor: item.productdetailsid == select ? '#00e9bf' : 'grey', marginVertical: 10, marginLeft: 10, alignSelf: 'flex-start' }}>
                        <Text style={{ color: '#ffffff', fontWeight: 'semibold', fontSize: 15 }}>{item.color.charAt(0).toUpperCase() + item.color.slice(1)}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    </View>)
}