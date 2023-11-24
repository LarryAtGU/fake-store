import { View,Text,StyleSheet } from "react-native";
export default function ProductDetail({prod}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                product detail view
            </Text>
        </View>
    )
}
const styles= StyleSheet.create({
    container: {
        flexDirection:'column'
    },
    text:{

    }
})