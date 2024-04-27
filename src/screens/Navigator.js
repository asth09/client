import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation, NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./HomeScreen";
import Almuerzos from "./Almuerzos";
import Desayunos from "./Desayunos";
import Bebidas from "./Bebidas";
import MenuScreen from "./MenuScreen";
import PedidoScreen from "./PedidoScreen";
import MenuForm from "./MenuForm";
import Ordenes from "./Ordenes";
import You from "./You";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
  const navigation = useNavigation();
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token"); // Eliminar el token del almacenamiento
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
    console.log(handleLogout);
  };
  return (
    <>
      <SafeAreaView>
        <StatusBar backgroundColor={"#1f1f1f"} barStyle={"light-content"} />
      </SafeAreaView>
      <HomeStackNavigator.Navigator
        initialRouteName="HomeScreen"
        backgroundColor={"#1f1f1f"}
        screenOptions={{
          headerTintColor: "#ffffff",
          headerStyle: {
            backgroundColor: "#1f1f1f",
          },
          headerTitleStyle: {
            color: "#ffffff",
          },
        }}
      >
        <HomeStackNavigator.Screen
          name="Homes"
          component={HomeScreen}
          options={{
            headerRight: () => (
              <View style={{ flexDirection: "row", marginRight: 10 }}>
                <TouchableOpacity onPress={handleLogout}>
                  <Text style={{ color: "#ffffff" }}>Salir</Text>
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <HomeStackNavigator.Screen
          name="MenuScreen"
          component={MenuScreen}
          options={{
            headerRight: () => (
              <View style={{ flexDirection: "row", marginRight: 10 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("MenuForm")}
                >
                  <Text style={{ color: "#ffffff" }}>Crear</Text>
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <HomeStackNavigator.Screen name="Desayunos" component={Desayunos} />
        <HomeStackNavigator.Screen name="Almuerzos" component={Almuerzos} />
        <HomeStackNavigator.Screen name="Bebidas" component={Bebidas} />
        <HomeStackNavigator.Screen name="MenuForm" component={MenuForm} />
        <HomeStackNavigator.Screen name="You" component={You} />
      </HomeStackNavigator.Navigator>
    </>
  );
}

function MyStack2() {
  return (
    <HomeStackNavigator.Navigator
      backgroundColor={"#1f1f1f"}
      screenOptions={{
        headerTintColor: "#ffffff",
        headerStyle: {
          backgroundColor: "#1f1f1f",
        },
        headerTitleStyle: {
          color: "#ffffff",
        },
      }}
    >
      <HomeStackNavigator.Screen name="PedidoScreen" component={PedidoScreen} />
      <HomeStackNavigator.Screen name="MenuForm" component={MenuForm} />
    </HomeStackNavigator.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 65, backgroundColor: "#1f1f1f" },
      }}
      tabBarOptions={{
        activeTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Home"
        header
        component={MyStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={30} color="#fff" />
          ),

          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Ordenes"
        header
        component={Ordenes}
        options={{
          tabBarLabel: "Ordenes ",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="playlist-edit"
              size={40}
              color="#fff"
            />
          ),

          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Pedidos"
        component={MyStack2}
        options={{
          tabBarLabel: "Pedidos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-sharp" size={30} color="#fff" />
          ),
          headerShown: false,
          tabBarBadge: 10,
        }}
      />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}
