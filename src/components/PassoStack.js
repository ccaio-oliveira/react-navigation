import { View, Text, Button } from "react-native"

export default ({ children, avancar, navigation, voltar }) => {
    return (
        <View style={{ flex: 1}}>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                {voltar 
                    ?   <Button 
                            title="Voltar" 
                            onPress={() => navigation.goBack()} 
                        /> 
                    : false}
                {avancar 
                    ?   <Button 
                            title="Avançar" 
                            onPress={() => navigation.navigate(avancar)} 
                        /> 
                    : false}
            </View>
            <View style={{flex: 1}}>
                {children}
            </View>
        </View>
    )
}