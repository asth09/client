import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={[styles.container]}>
        <Image
          style={styles.image}
          source={require("../../assets/splash.png")}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MenuScreen")}
        >
          <View style={[styles.card]}>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>
                <Text>Menu del dia</Text>
              </Text>
              <Entypo
                style={styles.icontext}
                name="add-to-list"
                color="white"
              />
              <View></View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Desayunos")}
        >
          <View style={[styles.card]}>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>
                <Text>Desayunos</Text>
              </Text>
              <FontAwesome5
                style={styles.icontext}
                name="coffee"
                color="white"
              />
              <View></View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Almuerzos")}
        >
          <View style={[styles.card]}>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>
                <Text>Almuerzos</Text>
              </Text>
              <FontAwesome5
                style={styles.icontext}
                name="utensils"
                color="white"
              />

              <View></View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Bebidas")}
        >
          <View style={[styles.card]}>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>
                <Text>Bebidas</Text>
              </Text>
              <MaterialCommunityIcons
                style={styles.icontext}
                name="cup"
                color="white"
              />
              <View></View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -50,
    alignItems: "center",
    backgroundColor: "#424242",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  card: {
    width: 370,
    height: 80,
    alignItems: "center",
    flexDirection: "column",
    margin: 2,
    padding: 10,
    backgroundColor: "#DD5731",
    borderRadius: 20,
    borderColor: "white",
  },
  cardBody: {
    flex: 1,
    marginTop: -41,
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 360,
    borderColor: "#1f1f1f",
  },

  cardTitle: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 190,
    color: "#ffffff",
  },
  notifi: {
    fontSize: 15,
    backgroundColor: "#dc3545",
    borderCurve: 10,
    borderRadius: 50,
    color: "#fff",
  },
  icontext: {
    flex: 1,
    marginTop: -20,
    alignItems: "flex-start",
    marginRight: -250,
    fontSize: 45,
  },
});

export default HomeScreen;
