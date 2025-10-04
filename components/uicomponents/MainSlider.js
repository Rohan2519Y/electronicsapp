import { Dimensions, Image, View } from "react-native";
import { serverURL } from "../../services/FetchNodeServices";
import Carousel from "react-native-reanimated-carousel";

const { width, height } = Dimensions.get("window");

export default function MainSlider({ data }) {
    // Convert string -> array of filenames
    const images = data?.files ? data.files.split(",") : [];

    return (
        <View style={{ width: width }}>
            <Carousel
                autoPlay
                autoPlayInterval={2000}
                data={images}
                height={width / 2}
                loop
                pagingEnabled
                snapEnabled
                width={width}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => (
                    <View style={{ flex: 1  ,borderWidth:1,justifyContent:'center' }}>
                        <Image
                            source={{ uri: `${serverURL}/images/${item}` }}
                            style={{ width: width, height: height/2, resizeMode: "contain" }}
                        />
                    </View>
                )}
            />
        </View>
    );
}
