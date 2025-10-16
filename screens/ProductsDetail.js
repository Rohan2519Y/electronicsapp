import { View, Text, Dimensions, FlatList, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
const { width, height } = Dimensions.get('window');
import Feather from 'react-native-vector-icons/Feather'
import { serverURL } from "../services/FetchNodeServices";
import { useState, useEffect } from "react";
import ProductColorDetails from '../components/uicomponents/ProductColorDetails';
import RenderHtml from 'react-native-render-html';
import PlusMinus from '../components/uicomponents/PlusMinus'
import { useDispatch } from "react-redux";

export default function ProductDetails({ route }) {
  const { item, props } = route.params;
  const image = item.picture.split(',')
  const [slide, setSlide] = useState('')
  const [num, setNum] = useState(0)
  var dispatch = useDispatch()
  console.log('itemm', item)
  console.log('props', props)
  useEffect(() => {
    setSlide(image[0])
  }, []);

  const handleQtyChange = (value) => {
    // alert(value)
    if (value == 0) {
      dispatch({ type: 'REMOVE_PRODUCT', payload: [item.productdetailsid, item] })
    }
    else {
      item['qty'] = value
      dispatch({ type: 'ADD_PRODUCT', payload: [item.productdetailsid, item] })
    }
    props.navigation.setParams('xxxxxx');
  }

  const handlePlus = () => {
    const newVal = num + 1;
    setNum(newVal);
    handleQtyChange(newVal);
  };

  const handleMinus = () => {
    if (num > 0) {
      const newVal = num - 1;
      setNum(newVal);
      handleQtyChange(newVal);
    }
  };


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
    return (<>
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
      <View style={{ borderRadius: 10, marginTop: '3%', borderWidth: 2, borderColor: '#353535', paddingVertical: 10, paddingHorizontal: 16 }}>
        <RenderHtml tagsStyles={{ body: { color: '#fff', fontSize: 15, fontWeight: 500 } }}
          contentWidth={width}
          source={{ html: item.description }}
        />
      </View>
    </>)
  }

  const MyButton = () => {
    return (
      <View>
        <View style={{ width: '100%', height: 50, flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <TouchableOpacity activeOpacity={0.7} style={{ width: '45%', height: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#00e9bf', borderRadius: 10 }}>
            <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 17 }}>Buy Now</Text>
          </TouchableOpacity>
          {num == 0 ?
            < TouchableOpacity onPress={handlePlus} activeOpacity={0.7} style={{ width: '45%', height: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#192a56', borderRadius: 10 }}>
              <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 17 }}>Add To Cart</Text>
            </TouchableOpacity> : <PlusMinus num={num} setNum={setNum} handlePlus={handlePlus} handleMinus={handleMinus} />}
        </View>
      </View >
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191919' }}>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
          {BigImage()}
          <View>
            <FlatList
              horizontal
              data={image}
              renderItem={({ item }) => <ImageView item={item} />}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>
          {Details()}
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 70,
            backgroundColor: '#191919',
            borderTopWidth: 1,
            borderTopColor: '#333',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
            elevation: 8,
          }}>
          {MyButton()}
        </View>
      </View>
    </SafeAreaView>
  );
}