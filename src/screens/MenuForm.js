import React, { useState, useEffect } from 'react'; 
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity, ScrollView } from 'react-native'; 
import { saveMenu, getMenu, updateMenu } from "../api/menu";


const MenuForm = ({ navigation, route }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [tipo, setTipo] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [disponibilidad, setDisponibilidad] = useState('');
  const [existencia, setExistencia] = useState('');
  const [error, setError] = useState('');
  const [editing, setEditing] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = editing ? 
        await updateMenu(route.params.id, { nombre, descripcion, precio, tipo, ingredientes, disponibilidad, existencia }) :
        await saveMenu({ nombre, descripcion, precio, tipo, ingredientes, disponibilidad, existencia });
  
      if (response) {
        console.log('Registro exitoso');
        setError('');
        navigation.navigate('MenuScreen');
      } else {
        setError('Error al enviar los datos');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      setError('Error al enviar los datos');
    }
  };
  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({ headerTitle: 'Actualizar menu'});
      setEditing(true); 
      const fetchData = async () => {
        try {
          const data = await getMenu(route.params.id);
          setNombre(data.nombre);
          setDescripcion(data.descripcion);
          setPrecio(data.precio.toString());
          setTipo(data.tipo);
          setIngredientes(data.ingredientes);
          setDisponibilidad(data.disponibilidad);
          setExistencia(data.existencia.toString());
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      };

      fetchData();
    }
  }, []);
 
  return ( 
    <ScrollView style={styles.scrollView}   overScrollMode='never'>
    <View style={styles.container}> 
    
    
      <TextInput placeholder="Nombre"
        style={styles.input} 
        value={nombre} 
        onChangeText={setNombre} 
        placeholderTextColor="#fff"
      />
      <TextInput placeholder="Descripcion"
        style={styles.input} 
        value={descripcion} 
        onChangeText={setDescripcion} 
        placeholderTextColor="#fff"
      /> 
      <TextInput placeholder="tipo"
        style={styles.input} 
        value={tipo} 
        onChangeText={setTipo} 
        placeholderTextColor="#fff"

      />
      
      <TextInput placeholder="Precio"
        style={styles.input} 
        value={precio} 
        onChangeText={setPrecio} 
        keyboardType="numeric" 
        placeholderTextColor="#fff"
      /> 
       
     
      <TextInput placeholder='Ingredientes'
        style={styles.input} 
        value={ingredientes} 
        onChangeText={setIngredientes}
        placeholderTextColor="#fff" 
      /> 
      <TextInput placeholder='Disponibilidad'
        style={styles.input} 
        value={disponibilidad} 
        onChangeText={setDisponibilidad} 
        placeholderTextColor="#fff"
      /> 
      <TextInput placeholder='Existencia'
        style={styles.input} 
        value={existencia} 
        onChangeText={setExistencia} 
        keyboardType="numeric" 
        placeholderTextColor="#fff"
      /> 
 
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}> Guardar</Text>
      </TouchableOpacity>
 
      
      {
        !editing ? (
          <Button  title="Enviar" onPress={handleSubmit} />
        ) : (
          <Button title="Actualizar" onPress={handleSubmit} />
        )
      }
      {error ? <Text style={styles.error}>{error}</Text> : null}

   
</View  >
</ScrollView>
  ); 
}; 

 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    alignItems: 'center',
    backgroundColor:"#433E37",
  }, 
  input: { 
    marginTop:20,
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    fontWeight: 'bold',  
    color: '#fff',
    
  }, 
  error: { 
    color: 'red', 
    marginTop: 10, 
  }, 
  button: {
    backgroundColor: '#DD5731',
    padding: 10,
    borderRadius: 10,
    marginTop:4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
    textcount:{
   flexDirection:"row",
   color: '#fff',
    },
    textcount:{
      flexDirection:"row",
      color: '#fff', 
      fontWeight: 'bold',  
       },
       row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
       },
       scrollView: {
      backgroundColor:"#433E37",
    },
});
 
export default MenuForm;
