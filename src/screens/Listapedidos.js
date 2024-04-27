import { View, Text, StyleSheet, Image,Button,TouchableOpacity,ScrollView } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';



const Listapedidos = () => {
 
return (
  <ScrollView style={styles.scrollView}   overScrollMode='never'>

        <View style={[styles.container]}> 
                             
  <View style={styles.countContainertitulo}>

</View>
</View>
       </ScrollView>
);
};

const styles = StyleSheet.create({
  container: {

    alignItems: 'center',
    },
     scrollView: {
     borderColor:"blue",
      marginHorizontal: 10,
      scrollbar:"blue",
    
    },
    card: {
      width: 370,
      height: 200,
      margin: 4,
      backgroundColor: 'white',
      borderRadius: 20,
      borderColor:"black",
    },
    cardBody: {
      marginTop:-41,
      justifyContent: 'space-between',
      
    },
    cardmenu: {  
      
      fontWeight: 'bold',
     
      
    },
    countContainer:{
         marginTop:40,
        flexDirection:"row",
        alignItems:"center",
       
              
    },
    countContainertitulo:{
      flexDirection:"row",
        alignItems:"center",

    },
    cardTitle: {
      padding: 5,
      marginTop:40,
      fontSize: 20,
      fontWeight: 'bold',
      marginRight:200,
    },
    button: {
     width:50,
     height:50,
      backgroundColor: '#198754',
      borderRadius: 100,
     margin:10,
     alignItems:"center",
    },
    button1: {
      width:50,
      height:50,
       backgroundColor: '#dc3545',
       borderRadius: 100,
      margin:10,
      alignItems:"center",
    },
    buttonlisto:{
      alignItems:"center",
      fontSize:10,
      fontWeight: 'bold',
      width:90,
      height:30,
       backgroundColor: '#0d6efd',
       borderRadius: 20,
       margin:10,
       
    },
    buttonTextlisto:{
      color:"#fff",
      fontWeight: 'bold',      
      fontSize:20,
    },
    textcount: {
      fontSize:20,
      fontWeight: 'bold',
      alignItems:"center"
      
    },
    buttonText: {
      color:"#fff",
      fontWeight: 'bold',      
      fontSize:35,
      
    },
    containercount: {
      alignItems: 'flex-end',
      fontWeight: 'bold', 
      marginTop:-40, 
      right:10,
      },
    menutitulo: {
      flexDirection:"row",
      alignItems:"center",
      fontSize: 20,
      fontWeight: 'bold',
      alignItems:"row",
      },
    containerselect:{
    flex:1,
    marginTop:1000,
    fontWeight: 'bold',
    },
  });
 

export default Listapedidos