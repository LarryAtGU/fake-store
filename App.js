import { StyleSheet, Text, View } from 'react-native';
import { getCategories,getCategoryProducts } from './src/datamodel/category';
import { useState,useEffect } from 'react';
import Categories from './src/UI/screens/Categories';
import ProdInCat from './src/UI/screens/ProdInCat';
export default function App() {
  const [catid,setCatID] = useState('')
  const gotoCat = (cid='') => {
    console.log("CID is: ",cid)
    setCatID(cid)
  }
  return (
    <View style={styles.container}>
      {catid=='' ? <Categories gotoCat={gotoCat}/>:
      <ProdInCat catid={catid} back={gotoCat}/>
    }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
