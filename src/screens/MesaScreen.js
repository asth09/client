import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useNavigation } from "@react-navigation/native";
import { getMesas, deleteMesa } from "../api/mesas";

const MesaScreen = () => {
  const navigation = useNavigation()
    const [mesas, setMesas] = useState([])
    const loadMesas = async () => {
        const data = await getMesas()
        setMesas(data)
    }
    const handleDelete = async (id) => {
       await deleteMesa(id)
       await loadMesas()
    }
    useEffect(() => {
        loadMesas()
    }, [])
  return (
    <View>
        <FlatList
        data={mesas}
        renderItem={({ item }) => {
            return (
                <>
                <View style={cardStyle}>
                <TouchableOpacity onPress={() => navigation.navigate('MesaForm', { id: item._id})}>
                <Text>Numero de la mesa: {item.numesa}</Text>
                <Text>Capacidad: {item.capacidad}</Text>
                <Text>Estado: {item.estado}</Text>
                <Text>Ubicacion: {item.ubicacion}</Text>
                <Text>Descripcion: {item.descripcion}</Text>
                <Text>Comentarios: {item.comentarios}</Text>
                <Text>Mesero: {item.mesero && item.mesero.usuario}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor: '#ee5253', padding: 7, borderRadius: 5}}
                onPress={() => 
                handleDelete(item._id)}>
                  <Text style={{ color: "#fff"}}>Delete</Text>
                </TouchableOpacity>
                </View>
                </>
            )
        }}
        />
    </View>
  )
}
const cardStyle = {
    flexDirection: 'row',
    padding: 20,
    marginVertical: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
  };
  

export default MesaScreen