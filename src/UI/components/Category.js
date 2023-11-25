import { View,Text,StyleSheet } from "react-native"
import color from "../../constants/color"
export default function Category({cat,gotoCat}){
    return (
    <View style={styles.container}>
        <Text style={styles.text} onPress={()=>gotoCat(cat.id)}>{cat.title}</Text>
    </View>
    )

}
const styles = StyleSheet.create({
    container:{
        width:'95%',
        height:60,
        backgroundColor:color.quoteBackGround,
        borderWidth:2,
        borderColor:color.border,
        borderRadius:5,
        marginHorizontal:10,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center'

    },
    text:{
        fontWeight:'bold',
        color:color.textLink,
        fontSize:30,
        padding:10,

    }
})