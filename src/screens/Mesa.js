import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Mesa = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/api/mesas')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      {data.map(item => (
        <Text key={item.id}>{item.name}</Text>
      ))}
    </View>
  );
};

export default Mesa;
