import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';




const HomeScreen = () => { 
    const navigation = useNavigation();
    const loadTasks = async() => {
       const res = await fetch('http://192.168.1.32:3000/api/mesas')
       const data = await res.json()
       console.log(data)
    }
    useEffect(() => {
        loadTasks()
    }, 
    []
  )


  return (
<>

<View style={[styles.container]}> 
     

<Image
          style={styles.image}
          source={require("../assets/logo.png")}
        />
  <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('MenuScreen')}>
  <View style={[styles.card]}>
    <View style={styles.cardBody}>
      <Text style={styles.cardTitle}>
        <Text>Menu del dia</Text>
      </Text>
        <Entypo style={styles.icontext} name="add-to-list"  color="white" />
      <View>
      </View>
    </View>
  </View>
  </TouchableOpacity>
    <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Desayunos')} >
      <View style={[styles.card]}> 
    <View style={styles.cardBody}>
      <Text style={styles.cardTitle}>
        <Text>Desayunos</Text>
      </Text> 
      <FontAwesome5 style={styles.icontext} name="coffee" color="white" />
   <View>
      </View>
    </View>
  </View>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Almuerzos')}>
  <View style={[styles.card]}>
    <View style={styles.cardBody}>
      <Text style={styles.cardTitle}>
        <Text>Almuerzos</Text>

      </Text>
      <FontAwesome5 style={styles.icontext} name="utensils"  color="white" />
      
      <View>

      </View>
    </View>
  </View>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Bebidas')} >
  <View style={[styles.card]}>
    <View style={styles.cardBody}>
      <Text style={styles.cardTitle}>
        <Text >Bebidas</Text>
      </Text>
      <MaterialCommunityIcons style={styles.icontext} name="cup"  color="white" />
      <View>
      
      </View>
    </View>
  </View>
  </TouchableOpacity>

  </View>
  </>
  
  );

};


const styles = StyleSheet.create({
    container: {
      flex:1,
      marginTop:-50,
      alignItems: 'center',
      backgroundColor:"#424242",
    
      },
      tinyLogo: {
        width: 50,
        height: 50,
      },
    card: {
      width: 370,
      height: 80,
      flexDirection: 'column',
      alignItems: 'center',
      margin: 2,
      padding: 10,
      backgroundColor: '#DD5731',
      borderRadius: 20,
      borderColor:"white",
    },
    cardBody: {
      flex:1,
      alignItems: 'center',
      marginTop:-41,
      justifyContent: 'space-between',
    },
    image: {
      width: 350,
      height: 350,
      borderRadius:360,
      borderColor:"#1f1f1f",
      borderRadius:360,
    },
  
    cardTitle: {
      marginTop:40,
      fontSize: 20,
      fontWeight: 'bold',
      marginRight: 190,
      color:"#ffffff",
    },
    notifi:{
     fontSize:15,
       backgroundColor: '#dc3545',
       borderCurve:10,
       borderRadius:50,
      color:"#fff",
    },
    icontext:{
      flex:1,
      marginTop:-20,
      alignItems:"row",
      marginRight:-250,
      fontSize:45
    }
  });

export default HomeScreen