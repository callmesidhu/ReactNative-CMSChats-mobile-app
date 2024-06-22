import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Pages/Login';
import SignUp from './Pages/Signup';
import Home from './Pages/Home';
import PageLoader from './Pages/PageLoader'
import { MenuProvider } from 'react-native-popup-menu';


const Stack = createStackNavigator();

const App = () => {
  return (
    <MenuProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loader" screenOptions={{ headerShown: false }}>
       <Stack.Screen name="LoginPage" component={Login} />
       <Stack.Screen name="SignUpPage" component={SignUp} />
       <Stack.Screen name="HomePage" component={Home} />
       <Stack.Screen name="Loader" component={PageLoader} />
       </Stack.Navigator>
    </NavigationContainer>
    </MenuProvider>

  );
};

export default App;
