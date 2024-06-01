import React from 'react';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginPage' screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignUpPage" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

  
const Stack = createStackNavigator();

