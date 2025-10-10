import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { postData } from "../../services/FetchNodeServices";

export default function ProductColorDetails({ item }) {
    console.log('itreeeeam', item.productid)
    const [details, setDetails] = useState([])

    const fetchProductDetails = async () => {
        var result = await postData('userinterface/fetch_product_details_by_productid', { productid: item.productid })
        setDetails(result.data)
    }

    useEffect(function () {
        fetchProductDetails()
    }, [])

    return (<View style={{ width: '100%' }}>
        <Text style={{ color: 'white' }}>Brand Color</Text>
        {details.map((item) => (
            <View>
                <Text style={{ color: '#ffffff' }}>{item.color}</Text>
            </View>
        ))}
        <TouchableOpacity>
        </TouchableOpacity>
    </View>)
}