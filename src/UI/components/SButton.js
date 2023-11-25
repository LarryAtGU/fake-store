import { StyleSheet,View,Text } from "react-native";
import color from "../../constants/color";

export default SButton = function ({title,process,width=0,disable=false}) {
    return (
        <View style={[styles.box,{width:width||styles.box.width, 
        backgroundColor:disable?color.disable:styles.box.backgroundColor}]} >
        <Text style={styles.text} onPress={disable ? ()=>{} : process}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    box: {
        // width:50,
        height:20,
        backgroundColor:color.primary,
        borderWidth:2,
        borderColor:color.border,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        fontSize:12,
        color:color.textButton,
        marginHorizontal:5
    }
})