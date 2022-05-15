 import { StyleSheet, Text, View } from 'react-native'
 import React from 'react'
 
 const Header = () => {
   return (
     <View style={styles.header}>
       <Text style={styles.title}>لیست کارهای روزمره:</Text>
     </View>
   )
 }
 
 export default Header
 
 const styles = StyleSheet.create({
header:{
    height:90,
    paddingTop:40,
    backgroundColor:'skyblue',
},
title:{
    textAlign:'center',
    color:'white',
    fontSize:25,
    fontWeight:'bold',
}
 })