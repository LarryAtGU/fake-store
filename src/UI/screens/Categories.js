import { View,StyleSheet,Text } from "react-native";
import { useState,useEffect } from "react";
import Title from "../components/Title";
import Message from "../components/Message";
import color from "../../constants/color";
import { getCategories,getCategoryProducts } from "../../datamodel/category";
import Category from "../components/Category";

const isLoading = () => <Text style={styles.text}>Loading....</Text>

export default Categories = function ({gotoCat}) {
    const [categories, setCategories]=useState([])

    useEffect(()=>{
      const loadCategories = async() =>
      {
        try{
          const cat = await getCategories()
          setCategories(cat)  
        }catch(e){
          console.error('error in loadcategories:',e)
        }
      }
      loadCategories()
    },[])
    
    return (
        <View style={styles.container}>
            <Title>Categories</Title>
            <Message> 
            {!!categories?.length ? categories.map((cat,i) => 
                <Category key={cat.id} cat={cat} gotoCat={gotoCat}/>
            )
                : isLoading()}
            </Message>
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