import {
  View,
  Text,
  Alert,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { getMenus, deleteMenu } from "../api/menu";

const MenuScreen = () => {
  const navigation = useNavigation();
  const [menus, setMenus] = useState([]);
  const loadMenus = async () => {
    const data = await getMenus();
    setMenus(data);
  };
  const handleDelete = async (id) => {
    await deleteMenu(id);
    await loadMenus();
  };
  useEffect(() => {
    loadMenus();
  }, []);
  const handleDeletePress = (id) => {
    Alert.alert(
      "Confirmar eliminación",
      "¿Estás seguro de que deseas eliminar este registro?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: () => handleDelete(id),
        },
      ]
    );
  };
  return (
    <ScrollView style={cardStyle.scrollView} overScrollMode="never">
      <View style={cardStyle.container}>
        <FlatList
          data={menus}
          renderItem={({ item }) => {
            return (
              <View style={cardStyle.box}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("MenuForm", { id: item._id })
                  }
                >
                  <Text style={cardStyle.text}>Nombre: {item.nombre}</Text>
                  <Text style={cardStyle.text}>
                    Descripcion: {item.descripcion}
                  </Text>
                  <Text style={cardStyle.text}>Precio: {item.precio}</Text>
                  <Text style={cardStyle.text}>Tipo: {item.tipo}</Text>
                  <Text style={cardStyle.text}>
                    Ingredientes: {item.ingredientes}
                  </Text>
                  <Text style={cardStyle.text}>
                    Disponibilidad: {item.disponibilidad}
                  </Text>
                  <Text style={cardStyle.text}>
                    Existencia: {item.existencia}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    backgroundColor: "#ee5253",
                    padding: 7,
                    borderRadius: 5,
                  }}
                  onPress={() => handleDeletePress(item._id)}
                >
                  <Text>
                    <AntDesign name="delete" size={24} color="black" />
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};
const cardStyle = {
  box: {
    flexDirection: "row",
    padding: 20,
    marginVertical: 8,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgb(231, 108, 51)",
    borderRadius: 20,
  },
  container: {
    backgroundColor: "#433E37",
  },
  scrollView: {
    backgroundColor: "#433E37",
  },
  text: {
    color: "black",
    fontWeight: "bold",
  },
};

export default MenuScreen;
