import React from 'react'; 
import { NavigationContainer } from "@react-navigation/native"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { StatusBar } from 'react-native'; 

import Login from "./screens/auth/Login"; 
import Navigator from './screens/Navigator';

const Stack = createNativeStackNavigator() 
export default function App() { 
  return ( 
    <> 
    <SafeAreaView> 
      <StatusBar backgroundColor={'#1f1f1f'} barStyle={'light-content'}/> 
    </SafeAreaView> 
    <NavigationContainer> 
      <Stack.Navigator  screenOptions={{ 
      headerStyle: { 
        backgroundColor: '#1f1f1f', // Aquí puedes definir tu color de fondo deseado 
      }, 
      headerTintColor: '#fff', // Color del texto del encabezado 
      headerTitleStyle: { 
        fontWeight: 'bold', 
      }, 
    }}>  
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen  name='Navigator' options={{headerShown: false }}   component={Navigator}/>
    
      </Stack.Navigator> 
    </NavigationContainer> 
    </> 
  ) 
}