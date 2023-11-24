import { View,StyleSheet,Text } from "react-native";
import { useState,useEffect } from "react";
import Title from "../components/Title";
import Message from "../components/Message";
import color from "../../constants/color";
import {getCategoryProducts, getCategoryTitle } from "../../datamodel/category";
import ProductRow from "../components/ProductRow";
import TButton from "../components/TButton";

const isLoading = () => <Text style={styles.text}>Loading....</Text>

export default ProdInCat = function ({catid,back}) {
    const [products, setProducts]=useState([])

    useEffect(()=>{
        const loadCategoryProducts = async (catid) => {
            try{
              const prods = await getCategoryProducts(catid)
              setProducts(prods)
            }catch(e){
              console.error('err in loadCategoryProducts: ',e)
            }
          }
          console.log('in prod useeffect')
        loadCategoryProducts(catid)
    },[])
    
    return (
        <View style={styles.container}>
            <Title>{getCategoryTitle(catid)}</Title>
            <Message> 
            {!!products?.length ? products.map(prod => 
                <ProductRow key={prod.id} prod={prod}/>
            )
                : isLoading()}
            </Message>
            <TButton title='Back' process={()=>back('')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:20,
        backgroundColor:color.screenBackGroundColor,
        justifyContent:'space-around',
        flexDirection:'column',
        alignItems:'center'
    }, 
    text: {
        color:'white',
        fontSize:20
    }
})