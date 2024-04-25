const API = 'http://192.168.1.17:3000/api/login'

export const login = async (usuario, password) => {
    const response = await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ usuario, password })
    });
  
    return await response.json();
  };
  