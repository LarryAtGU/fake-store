import { View,Text,StyleSheet } from "react-native"

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
        backgroundColor:'grey',
        borderWidth:2,
        borderColor:'black',
        borderRadius:5,
        marginHorizontal:10,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center'

    },
    text:{
        fontWeight:'bold',
        color:'white',
        fontSize:30,
        padding:10,
    }
})