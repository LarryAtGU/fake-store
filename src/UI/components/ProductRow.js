import { View,Text,StyleSheet,Image } from "react-native"
import { useState } from "react"
import SButton from "./SButton"
import ProductDetail from "./ProductDetail"
import color from "../../constants/color"
const displayCurrency = (s) => {
    return '$'+parseFloat(s).toFixed(2)
}
export default function ProductRow({prod}){
    const [showDetail, setShowDetail] = useState(false)
    const toggleDetail = ()=> setShowDetail(!showDetail)
    
    return (
    <View style={styles.container}>
        <View style={styles.toppan}>
            <Image source={{uri:prod.image}} style={styles.smallImg} />
            <View style={styles.titlepan}>
                <Text style={styles.text} >{prod.title}</Text>
                <Text style={styles.text} ><Text style={{fontWeight:'bold'}}>Price:</Text> {displayCurrency(prod.price)}</Text>
            </View>

        </View>
        {showDetail && <ProductDetail prod={prod} />}
        <View style={styles.buttonpan}>
                <SButton title={showDetail?'Show Less':'Show Details'}
                    process={toggleDetail}
                    />
                <SButton title='Add to Cart'
                    process={toggleDetail}
                    />
                
            </View>

    </View>
    )

}
const styles = StyleSheet.create({
    buttonpan:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-around',
        width:'80%'
    },
    titlepan:{
        width:'70%',
        flexDirection:'column',
        justifyContent:'space-between',
    },
    smallImg:{
        marginLeft:5,
        width:70,
        height:70,
        borderColor:color.border,
        borderRadius:5,
        borderWidth:1
    },
    toppan:{
        flexDirection:'row',
        alignContent:'center',
    },
    container:{
        width:'95%',
        // height:70,
        backgroundColor:color.contentBackGround,
        borderWidth:2,
        borderColor:color.border,
        borderRadius:5,
        marginLeft:5,
        marginRight:5,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10

    },
    text:{
        color:color.textDark,
        fontSize:12,
        paddingLeft:5
    },
})