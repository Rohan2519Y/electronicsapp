import { View, Text, StyleSheet } from "react-native";
import { serverURL, getData } from '../services/FetchNodeServices'
import { useEffect, useState } from "react";
import SliderComponent from '../components/uicomponents/SliderComponent'
import SearchBar from '../components/uicomponents/SearchBar'
import MainSlider from '../components/uicomponents/MainSlider'
export default function Home(props) {
  const [category, setCategory] = useState([])
  const [banners, setBanners] = useState([])
  const fetchCategoryList = async () => {
    var result = await getData('userinterface/display_all_category')
    setCategory(result.data)
  }
  const fetchAllBanner = async () => {
    var result = await getData('userinterface/fetch_all_banner')
    setBanners(result.data[0])
    console.log(result.data[0])
  }

  useEffect(function () {
    fetchCategoryList()
    fetchAllBanner()
  }, [])

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <SearchBar />
      </View>
      <SliderComponent data={category} />
      <View>
        <MainSlider data={banners} />
      </View>
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  }
})