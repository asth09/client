import { View, Text, StyleSheet, Image, Button, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import { Feather } from '@expo/vector-icons';

const Ordenes = () => {
  const navigation = useNavigation()
  const [selected, setSelected] = React.useState("");
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  const onPressm = () => setCount(prevCount => prevCount - 1)
  return (
    <ScrollView style={styles.scrollView} overScrollMode='never'>
      <View style={[styles.container]}>
        <View style={styles.countContainertitulo}>
          <TouchableOpacity style={styles.buttonlisto} >
            <Text style={styles.buttonTextlisto} onPress={() => navigation.navigate('You')}>  Pedir </Text>
            <Text style={styles.buttonTextlisto}><Feather name="arrow-right" size={20} color="white" /> </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.card]}>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Arepas </Text>
            <Text style={styles.cardmenu}> pollo,mechada,queso,cazon </Text>
            <View>
              <View style={styles.containercount}>

                <View styles={styles.containerselect} >

                  <Text styles={styles.textcount}>Mesa 1 </Text>


                </View>
                <View style={styles.countContainer}>

                  <Text>Cantidad: 2</Text>

                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 1,
    alignItems: 'center',
    backgroundColor: "#1f1f1f"
  },
  scrollView: {
    borderColor: "blue",

    scrollbar: "blue",
    backgroundColor: "#1f1f1f",

  },
  card: {
    width: 370,
    height: 120,
    margin: 4,
    backgroundColor: '#EEEEEE',
    borderRadius: 20,


  },
  cardBody: {
    marginTop: -41,
    justifyContent: 'space-between',

  },
  cardmenu: {

    fontWeight: 'bold',


  },
  countContainer: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",


  },
  countContainertitulo: {
    marginLeft: 250,

  },
  cardTitle: {
    padding: 5,
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 200,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#198754',
    borderRadius: 100,
    margin: 10,
    alignItems: "center",
  },
  button1: {
    width: 50,
    height: 50,
    backgroundColor: '#dc3545',
    borderRadius: 100,
    margin: 10,
    alignItems: "center",
  },
  buttonlisto: {
    flexDirection: "row",
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: '#DD5731',
    borderRadius: 15,
    padding: 5,
    margin: 8
  },
  buttonTextlisto: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 20,
    alignContent: "center"
  },
  textcount: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: "center"

  },
  buttonText: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 35,

  },
  containercount: {
    alignItems: 'flex-end',
    fontWeight: 'bold',
    marginTop: -40,
    right: 10,
  },
  menutitulo: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: "row",
  },
  FontAwesome: {
    marginTop: -10,
    flex: 1,
    fontSize: 40,
    marginLeft: 160,
  },
  containerselect: {
    flex: 1,
    marginTop: 1000,
    fontWeight: 'bold',
  },
});


export default Ordenes