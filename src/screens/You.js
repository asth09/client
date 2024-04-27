import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { getMesas } from "../api/mesas";

const You = () => {
  const [mesas, setMesas] = useState([]);
  const [selectedMesa, setSelectedMesa] = useState(null);
  const loadMesas = async () => {
    const data = await getMesas();
    setMesas(data.map(mesa => ({ label: ` ${mesa.numesa}`, value: mesa._id }
    )));
  };

  useEffect(() => {
    loadMesas();
  }, []);

  const handleMesaChange = (value) => {
    setSelectedMesa(value);
  };

  return (
    <View>
      <View>
        <Text>Mesa numero</Text>
        <RNPickerSelect
          placeholder={{}}
          onValueChange={handleMesaChange}
          value={selectedMesa}
          items={mesas} 
        />
      </View>
    </View>
  );
};

export default You;
