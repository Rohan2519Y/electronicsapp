import { View, Text, Dimensions, FlatList, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { serverURL } from "../services/FetchNodeServices";
import { useState } from "react";
const { width, height } = Dimensions.get('window')

export default function Cart(props) {
  const cartItems = useSelector((state) => state.mycart)
  const data = Object.values(cartItems)
  const dispatch = useDispatch()
  const [refresh, setRefresh] = useState(false)

  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: [id],
    });
    setRefresh(!refresh)
  };

  return (
    <View style={{ width: width, height: height, backgroundColor: '#f9f9f9' }}>
      <View style={{ width: '100%', height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#34495e' }}>
        <Text style={{ color: '#ecf0f1', fontSize: 30, fontWeight: 'bold' }}>Cart</Text>
      </View>
      <SafeAreaView>
        <View style={{ width: '100%' }}>
          <FlatList numColumns={1} data={data}
            contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 50 }}
            keyExtractor={(item) => item.productdetailsid.toString()}
            renderItem={(item) => (
              <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: 150, backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#00e9bf', marginVertical: 20, borderRadius: 15 }}>
                <View style={{ width: '95%', height: '90%', flexDirection: 'row' }}>
                  <View style={{ width: '35%', height: '100%' }}>
                    <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={{ uri: `${serverURL}/images/${item.item.productpicture}` }}></Image>
                  </View>
                  <View style={{ width: '65%', height: '100%', alignItems: 'center' }}>
                    <View style={{ width: '95%', height: '30%' }}>
                      <Text numberOfLines={2} style={{ color: '#000', fontSize: 16 }}>{item.item.brandname} {item.item.categoryname} {item.item.modelno} {item.item.productname}</Text>
                    </View>
                    <View style={{ width: '95%', height: '40%', }}>
                      <Text>MRP : ₹ {item.item.offerprice}</Text>
                      <Text style={{ textDecorationLine: 'line-through', color: 'grey', fontWeight: 'bold', marginRight: 10 }}>{item.item.price}.00</Text>
                      <Text >(Save ₹ {item.item.price - item.item.offerprice}, {((item.item.price - item.item.offerprice) / item.item.price * 100).toFixed(2)} %)</Text>
                    </View>
                    <View style={{ width: '100%', height: '30%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                      <TouchableOpacity activeOpacity={0.7} style={{ width: '55%', height: '95%', borderColor: '#000000', borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}><Text style={{ fontSize: 16, fontWeight: 600 }}>Move To Wishlist</Text></TouchableOpacity>
                      <TouchableOpacity onPress={() => handleRemove(item.item.productdetailsid)} activeOpacity={0.7} style={{ width: '40%', height: '95%', borderColor: '#000000', borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}><Text style={{ fontSize: 16, fontWeight: 600 }}>Remove</Text></TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )}>
          </FlatList>
        </View>
      </SafeAreaView>
    </View>
  )
}