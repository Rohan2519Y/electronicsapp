import { View, Text, Dimensions, FlatList, Image, TouchableOpacity, ScrollView } from "react-native";
const { width, height } = Dimensions.get('window');
import Feather from 'react-native-vector-icons/Feather'
import { serverURL } from "../services/FetchNodeServices";
import { useState, useEffect } from "react";
import ProductColorDetails from '../components/uicomponents/ProductColorDetails'

export default function ProductDetails({ route }) {
  const { item } = route.params;
  const image = item.picture.split(',')
  const [slide, setSlide] = useState('')
  console.log('itemm', item)
  useEffect(() => {
    setSlide(image[0])
  }, []);

  const BigImage = () => {
    return (
      <View style={{ width: '100%', height: 350, backgroundColor: '#1f1f1fff' }}>
        <View style={{ width: '100%', height: '15%', flexDirection: 'row', gap: 10, paddingRight: 10, justifyContent: "flex-end", alignItems: 'center' }}>
          <Feather name='heart' size={26} color='white' />
          <Feather name='share-2' size={26} color='white' />
        </View>
        <View style={{ width: '100%', height: '85%', justifyContent: "center", alignItems: 'center' }}>
          <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={{ uri: `${serverURL}/images/${slide}` }} />
        </View>
      </View>
    )
  }

  const ImageView = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={0.6} onPress={() => { setSlide(item) }}>
        <View style={{ margin: 5, width: width * .33, height: width * .33, backgroundColor: '#34495e', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{ width: '90%', height: undefined, aspectRatio: 1 }} source={{ uri: `${serverURL}/images/${item}` }} />
        </View>
      </TouchableOpacity>
    )
  }

  const Details = () => {
    return (
      <ScrollView>
        <View style={{ width: '100%', marginTop: 20 }}>
          <Text numberOfLines={3} style={{ paddingHorizontal: 10, fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}>{item.brandname} {item.categoryname} {item.modelno} {item.productname}</Text>
          <View style={{ flexDirection: 'column', height: 60, width: '95%', alignItems: 'flex-end', marginLeft: 'auto', marginRight: 'auto' }}>
            <View>
              <Text style={{ color: '#ffffff', fontSize: 24, fontWeight: 'semibold' }}>₹ {item.offerprice}</Text>
              <Text style={{ color: '#ffffff', fontSize: 12, fontWeight: 'semibold' }}>(Incl. all Taxes)</Text>
              <View style={{ marginVertical: 5, width: width * .95, height: 1, borderWidth: 1, borderColor: 'grey' }}></View>
            </View>
            <View style={{ width: '100%', height: 30, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ textDecorationLine: 'line-through', color: 'grey', fontWeight: 'bold', marginRight: 10 }}>MRP : {item.price}.00</Text>
              <Text style={{ color: '#ffffff' }}>(Save ₹ {item.price - item.offerprice}, {((item.price - item.offerprice) / item.price * 100).toFixed(2)} %)</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 40, width: '100%' }}>
          <ProductColorDetails item={item} />
        </View>
      </ScrollView>
    )
  }

  return (
    <View style={{ width: width, height: height, backgroundColor: '#191919' }}>
      {BigImage()}
      <View>
        <FlatList
          horizontal
          data={image}
          renderItem={({ item }) => <ImageView item={item} />}
          keyExtractor={item => item.productdetailsid}
        />
      </View>
      {Details()}
    </View>
  )
}