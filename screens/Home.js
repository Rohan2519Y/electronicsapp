import { View, Text, StyleSheet } from "react-native";
import { serverURL, getData } from '../services/FetchNodeServices'
import { useEffect, useState } from "react";
import SliderComponent from '../components/uicomponents/SliderComponent'
import SearchBar from '../components/uicomponents/SearchBar'
export default function Home(props) {
  const [category, setCategory] = useState([])
  const fetchCategoryList = async () => {
    var result = await getData('userinterface/display_all_category')
    setCategory(result.data)
    console.log(result.data)
  }

  useEffect(function () { fetchCategoryList() }, [])
  return (
    <View style={styles.container}>
      <View style={{alignItems:'center',marginTop:10}}>
        <SearchBar />
      </View>
      <SliderComponent data={category} />
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  }
})