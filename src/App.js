import { SafeAreaView, Text } from "react-native"
import TextoCentral from "./components/TextoCentral"

export default () => {
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <TextoCentral>
                App
            </TextoCentral>
        </SafeAreaView>
    )
}