import { SafeAreaView, Text } from "react-native"
import TextoCentral from "./components/TextoCentral"
import Routes from "./routes"
import TelaA from "./views/TelaA"
import TelaB from "./views/TelaB"
import TelaC from "./views/TelaC"

export default () => {
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <Routes />
        </SafeAreaView>
    )
}