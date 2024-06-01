import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUpPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignUpPage" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
