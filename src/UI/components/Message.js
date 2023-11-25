import { View,StyleSheet, Text, ScrollView} from "react-native";
import color from "../../constants/color";

export default Message = function ({children}) {
    return (

        <View style={styles.container}>
            <ScrollView >
                {children}        
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        width:'90%',
        borderWidth:2,
        borderColor:color.textDark,
        backgroundColor:color.contentBackGround,
        borderRadius:5,
        flexDirection:'column',
        alignItems:'center',
        marginVertical:10
    },
    text:{
        fontSize:16,
        padding:5
    }
})
