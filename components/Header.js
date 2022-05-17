 import { StyleSheet, Text, View } from 'react-native';
 import React from 'react';
 import { styles } from "./styles/globalStyle";
 
 const Header = () => {
   return (
     <View style={styles.header}>
       <Text style={styles.title}>لیست کارهای روزمره:</Text>
     </View>
   )
 }
 
 export default Header