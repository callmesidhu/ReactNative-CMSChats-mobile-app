import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../Context/authContext';


export default function PageLoader() {
  const navigation = useNavigation();
  const {isAuthenticated} = useContext(AuthContext); 


  useEffect(() => {
    setTimeout(() => {
      if (isAuthenticated==true) {
        navigation.navigate("HomePage");
      } else {
        navigation.navigate("LoginPage");
      }
    }, 1000);
  }, [isAuthenticated]);

  return (
    <View className='flex-1 justify-center items-center'>
      <ActivityIndicator size="large" color="#00FFFF" />
      <Text>Please wait...</Text>
    </View>
  );
};
