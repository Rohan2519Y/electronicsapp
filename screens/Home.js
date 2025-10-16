import { View, Text, StyleSheet, ScrollViewComponent, ScrollView } from "react-native";
import { serverURL, getData, postData } from '../services/FetchNodeServices'
import { useEffect, useState } from "react";
import SliderComponent from '../components/uicomponents/SliderComponent'
import SearchBar from '../components/uicomponents/SearchBar'
import MainSlider from '../components/uicomponents/MainSlider'
import BrandComponent from '../components/uicomponents/BrandComponent'
import ShowProduct from '../components/uicomponents/ShowProduct'
export default function Home(props) {

  const [category, setCategory] = useState([])
  const [banners, setBanners] = useState([])
  const [brands, setBrands] = useState([])
  const [product, setProduct] = useState([])

  const fetchCategoryList = async () => {
    var result = await getData('userinterface/display_all_category')
    setCategory(result.data)
  }

  const fetchAllBanner = async () => {
    var result = await getData('userinterface/fetch_all_banner')
    setBanners(result.data[0])
  }

  const fetchAllBrands = async () => {
    var result = await getData('userinterface/display_all_brands')
    setBrands(result.data)
  }
  const fetchAllProducts = async (product) => {
    var result = await postData('userinterface/display_all_products_by_status', { status: product })
    setProduct(result.data)
  }

  useEffect(function () {
    fetchCategoryList()
    fetchAllBanner()
    fetchAllBrands()
    fetchAllProducts('Trending')
  }, [])

  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <SearchBar />
      </View>
      <SliderComponent data={category} />
      <View>
        <MainSlider data={banners} />
      </View>
      <View>
        <BrandComponent data={brands} />
      </View>
      <View>
        <ShowProduct props={props} data={product} title={product[0]?.status} />
      </View>
    </ScrollView>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  }
})