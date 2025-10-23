import { View, Text, Dimensions, FlatList, Image, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { serverURL } from "../services/FetchNodeServices";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { checkSyncData } from '../storage/AsyncDataStorage'

const { width, height } = Dimensions.get('window')

export default function Cart(props) {
  const cartItems = useSelector((state) => state.mycart)
  const data = Object.values(cartItems)
  const dispatch = useDispatch()
  const [refresh, setRefresh] = useState(false)
  const navigation = useNavigation()

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: [id] });
    setRefresh(!refresh)
  };

  var totalAmount = data.reduce((p1, p2) => {
    var amt = p2.price * p2.qty
    return p1 + amt
  }, 0)

  var totalSaving = data.reduce((p1, p2) => {
    var amt = p2.offerprice == 0 ? 0 : (p2.price - p2.offerprice) * p2.qty
    return p1 + amt
  }, 0)

  var netAmount = totalAmount - totalSaving

  const handlePress = async () => {
    var key = await checkSyncData()
    if (key) {
      alert('payment gateway')
    }
    else {
      navigation.navigate('loginscreen')
    }

  }

  return (<>{data.length == 0 ?
    <View style={{ width: '100%', height: height, backgroundColor: '#f9f9f9', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold' }}>No Items</Text>
    </View> :
    <View style={{ width: '100%', height: height, backgroundColor: '#f9f9f9' }}>
      <View style={{ width: '100%', height: 40, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#34495e', paddingHorizontal: 20, flexDirection: 'row' }}>
        <Text style={{ color: '#ecf0f1', fontSize: 26 }}>Cart</Text>
        <Text style={{ color: '#ecf0f1', fontSize: 26 }}>Items : {data.length}</Text>
      </View>
      <SafeAreaView>
        <ScrollView>
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
            <View style={{ width: '100%', height: 210, alignItems: 'center', }}>
              <View style={{ alignItems: 'center', width: '90%', height: '100%', backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#00e9bf', borderRadius: 15 }}>
                <View style={{ width: '90%', height: '20%', justifyContent: 'center' }}><Text style={{ fontSize: 20, fontWeight: 600 }}>Order Summary ( {data.length} item )</Text></View>
                <View style={{ width: '90%', height: '20%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ fontSize: 18 }}>Original price</Text>
                  <Text style={{ fontSize: 18 }}>₹ {totalAmount}.00</Text>
                </View>
                <View style={{ width: '90%', height: '20%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ fontSize: 18 }}>Savings</Text>
                  <Text style={{ fontSize: 18 }}>₹ {totalSaving}.00</Text>
                </View>
                <View style={{ width: '90%', height: '20%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ fontSize: 18 }}>Total</Text>
                  <Text style={{ fontSize: 18 }}>₹ {netAmount}.00</Text>
                </View>
                <TouchableOpacity onPress={handlePress} activeOpacity={0.7} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#00e9bf', width: '90%', height: '17%', borderRadius: 10, }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Checkout</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  }</>)
}