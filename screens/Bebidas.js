import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { getMenuByType } from "../api/bebidas";
import { Feather } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { AntDesign } from '@expo/vector-icons';
import { getMesas } from "../api/mesas";

const Bebidas = () => {
  const navigation = useNavigation()
  const [menus, setMenus] = useState([])
  const loadMenus = async () => {
    const data = await getMenuByType()
    setMenus(data)
  }
  useEffect(() => {
    loadMenus()
  }, [])

  const [mesas, setMesas] = useState([]);
  const loadMesas = async () => {
    const data = await getMesas();
    setMesas(data.map(mesa => ({ label: ` ${mesa.numesa}`, value: mesa._id }
    )));
  };

  useEffect(() => {
    loadMesas();
  }, []);
  
  const [counts, setCounts] = useState(menus.length > 0 ? Array(menus.length).fill(0) : []);

  const onPress = (index) => {
    setCounts(prevCounts => {
      const newCounts = [...prevCounts];
      newCounts[index] = (newCounts[index] || 0) + 1; 
      return newCounts;
    });
  };
  
  const onPressm = (index) => {
    setCounts(prevCounts => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 0) {  
        newCounts[index] -= 1; 
      }
      return newCounts;
    });
  };
  
  return (
    <>
      <ScrollView style={cardStyle.scrollView} overScrollMode='never'>
        <View style={cardStyle.container}>
  
          <TouchableOpacity style={cardStyle.buttonlisto}>
            <Text style={cardStyle.buttonTextlisto}> Ordenar </Text>
            <Text style={cardStyle.buttonTextlisto}><Feather name="arrow-right" size={20} color="white" /> </Text>
          </TouchableOpacity>
  
          <FlatList
            data={menus}
            renderItem={({ item, index }) => (
              <View style={cardStyle.box}>
                <TouchableOpacity onPress={() => navigation.navigate('MenuForm', { id: item._id })}>
                  <Text style={cardStyle.text}>Nombre: {item.nombre}</Text>
                  <Text style={cardStyle.text}>Descripcion: {item.descripcion}</Text>
                  <Text style={cardStyle.text}>Precio: {item.precio}</Text>
                  <Text style={cardStyle.text}>Tipo: {item.tipo}</Text>
                  <Text style={cardStyle.text}>Ingredientes: {item.ingredientes}</Text>
                  <Text style={cardStyle.text}>Disponibilidad: {item.disponibilidad}</Text>
                  <Text style={cardStyle.text}>Existencia: {item.existencia}</Text>
                </TouchableOpacity>
  
                <View style={cardStyle.containercount}>
                  <View style={cardStyle.containerselect}>
                    <Text style={cardStyle.textcount}>Mesa numero</Text>
                    <RNPickerSelect
                      placeholder={{}}
                      onValueChange={(value) => console.log(value)}
                      items={mesas}
                    />  
                  </View>
                  <View style={cardStyle.countContainer}>
                    <Text style={cardStyle.textcount}>{counts[index]}</Text>
                    <TouchableOpacity onPress={() => onPressm(index)}>
                      <Text> <AntDesign name="minuscircle" size={35} color="#dc3545" /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onPress(index)}>
                      <Text> <AntDesign name="pluscircle" size={35} color="#198754" /> </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </>
  );
  
}
const cardStyle = ({
  text: {
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#424242",
  },
  box: {
    width: 500,
    flexDirection: 'row',
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#EEEEEE',
    borderRadius: 15,
  },
  scrollView: {
    backgroundColor: "#424242",
  },
  scrollView: {
    backgroundColor: "#424242",
  },
  card: {
    width: 370,
    height: 200,
    margin: 4,
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
    borderColor: "black",
  },
  cardBody: {
    marginTop: -41,
    justifyContent: 'space-between',
  },
  cardmenu: {
    fontWeight: 'bold',
  },
  countContainer: {
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
    borderRadius: 20,
    margin: 20,
    position: 'relative',
    marginLeft: "65%",

  },
  buttonTextlisto: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 20,
    alignContent: "center"
  },
  textcount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 35,

  }, containercount: {
    alignItems: 'flex-end',
    fontWeight: 'bold',
    padding: 10,
    left: "70%",
    position: 'absolute',
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
    fontWeight: 'bold',
  },
});


export default Bebidas