import { View, Text, FlatList, TouchableOpacity,ScrollView, Alert } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useNavigation } from "@react-navigation/native";
import { getPedidos, deletePedido } from "../api/pedidos";
import { AntDesign } from '@expo/vector-icons';


const PedidoScreen = () => {
  const navigation = useNavigation()
    const [pedidos, setPedidos] = useState([])
    const loadPedidos = async () => {
        const data = await getPedidos()
        setPedidos(data)
    }
    const handleDelete = async (id) => {
       await deletePedido(id)
       await loadPedidos()
    }
    useEffect(() => {
        loadPedidos()
    }, [])
    const handleDeletePress = (id) => {
      Alert.alert(
        'Confirmar eliminación',
        '¿Estás seguro de que deseas eliminar este registro?',
        [
          {
            text: 'Cancelar',
            style: 'cancel'
          },
          {
            text: 'Eliminar',
            onPress: () => handleDelete(id)
          }
        ]
      );
    };
  return (
<ScrollView style={cardStyle.scrollView}   overScrollMode='never'>
    <View style={cardStyle.container}>
        <FlatList
        data={pedidos}
        renderItem={({ item }) => {
            return (
                <>
                <View style={cardStyle.box}>
                <TouchableOpacity onPress={() => navigation.navigate('MenuForm', { id: item._id})}>
                <Text style={cardStyle.text}>Mesa: {item.mesa && item.mesa.numesa}</Text>
                <Text style={cardStyle.text}>Menus:</Text>
                {item.menus.map((menu, index) => (
                 <Text  style={cardStyle.text} key={index}> Nombre: {menu.menu}, Cantidad: {menu.cantidad}</Text>
                ))}
                <Text style={cardStyle.text} >Mesero: {item.meseros && item.meseros.usuario}</Text>
                <Text  style={cardStyle.text}>Fecha: {item.createdAt}</Text>
                <Text  style={cardStyle.text}>Fecha actualizacion: {item.updatedAt}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor: '#ee5253', padding: 7, borderRadius: 5}}
                onPress={() => 
                  handleDeletePress(item._id)}>
                  <Text><AntDesign name="delete" size={24} color="black" /></Text>
                </TouchableOpacity>
                </View>
                </>
            )
        }}
        />
    </View>
    </ScrollView>
  )
}
const cardStyle = ({ 
         box:{
    flexDirection: 'row',
    padding: 20,
    marginVertical: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ff9800',
    borderRadius: 20,
   },container:{
    backgroundColor:"#433E37",
     
   },
   scrollView:{

    backgroundColor:"#433E37",
   },
   text:{
    color:"#fff",
    fontWeight: 'bold',
   }
  });
  
  

export default PedidoScreen