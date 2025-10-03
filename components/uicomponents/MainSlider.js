import { View } from "react-native";
import TextBox from './TextBox'
export default function SearchBar() {
    return (
        <View >
            <TextBox w={.96} icon="search" msg="Search your Products..." />
        </View>
    )
}