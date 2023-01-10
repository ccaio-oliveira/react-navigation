import { View, Text } from "react-native"

export default ({ children }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 50 }}>
                {children}
            </Text>
        </View>
    )
}