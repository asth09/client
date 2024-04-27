import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { saveMesa, getMesa, updateMesa } from "../api/mesas";

const MesaForm = ({ navigation, route }) => {
  const [numesa, setNumesa] = useState('');
  const [capacidad, setCapacidad] = useState('');
  const [estado, setEstado] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [comentarios, setComentarios] = useState('');
  const [error, setError] = useState('');
  const [editing, setEditing] = useState(false);


  const handleSubmit = async () => {
    try {
      const response = editing ? 
        await updateMesa(route.params.id, { numesa, capacidad, estado, ubicacion, descripcion, comentarios }) :
        await saveMesa({ numesa, capacidad, estado, ubicacion, descripcion, comentarios });
  
      if (response) {
        console.log('Registro exitoso');
        setError('');
        navigation.navigate('MesaScreen');
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
      navigation.setOptions({ headerTitle: 'Actualizar mesa'});
      setEditing(true);
      const fetchData = async () => {
        try {
          const data = await getMesa(route.params.id);
          setNumesa(data.numesa.toString());
          setCapacidad(data.capacidad.toString());
          setEstado(data.estado);
          setUbicacion(data.ubicacion);
          setDescripcion(data.descripcion);
          setComentarios(data.comentarios);
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      };

      fetchData();
    }
  }, []);
  
  return (
    <View style={styles.container}>
      <Text>Numesa:</Text>
      <TextInput
        style={styles.input}
        value={numesa}
        onChangeText={setNumesa}
        keyboardType="numeric"
      />

      <Text>Capacidad:</Text>
      <TextInput
        style={styles.input}
        value={capacidad}
        onChangeText={setCapacidad}
        keyboardType="numeric"
      />

      <Text>Estado:</Text>
      <TextInput
        style={styles.input}
        value={estado}
        onChangeText={setEstado}
      />

      <Text>Ubicacion:</Text>
      <TextInput
        style={styles.input}
        value={ubicacion}
        onChangeText={setUbicacion}
      />
      
      <Text>Descripción:</Text>
      <TextInput
        style={styles.input}
        value={descripcion}
        onChangeText={setDescripcion}
      />
      
      <Text>Comentarios:</Text>
      <TextInput
        style={styles.input}
        value={comentarios}
        onChangeText={setComentarios}
      />

      {editing ? (
        <Button title="Actualizar" onPress={handleSubmit} />
      ) : (
        <Button title="Guardar" onPress={handleSubmit} />
      )}
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default MesaForm;
