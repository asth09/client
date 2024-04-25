export const API = 'http://192.168.1.10:3000/api/menu?tipo=Almuerzo'

export const getMenuByType = async () => {
    const res = await fetch(API);
    return await res.json();
  };
  