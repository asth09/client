import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TextInput, Text,ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Navigator from '../Navigator';

const Login = () => {
  const imageUrl = 'https://i.pinimg.com/736x/2c/43/0c/2c430c91b64c725bbe71180d9f35d58f.jpg';
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const handleLogin = async() => {
    try {
      const response = await fetch('http://192.168.1.10:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, password }),
      });

      if (response.ok) {
        console.log('Inicio de sesión exitoso');
        setError('');
        navigation.navigate("Navigator")
      } else {
        setError('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Error al iniciar sesión');
    }
  };
    
  return (
    <>
     <ScrollView style={styles.scrollView} keyboardShouldPersistTaps='handled' overScrollMode='never'>
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />
    </View>
    <View style={styles.container1}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View> 
    
    
    </ScrollView>
    </>
   
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 350,
    borderRadius:360,
    borderColor:"#f2f2f2",
    borderWidth:60,
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 10,
    marginTop:4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  scrollView: {
   
  paddingVertical:10
  },
});

export default Login;
