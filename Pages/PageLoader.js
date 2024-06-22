import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function PageLoader() {
  const navigation = useNavigation();

  var isAuthenticated = true;

  useEffect(() => {
    setTimeout(() => {
      if (!isAuthenticated) {
        navigation.navigate("LoginPage");
      } else {
        navigation.navigate("HomePage");
      }
    }, 2000);
  }, []);

  return (
    <View className='flex-1 justify-center items-center'>
      <ActivityIndicator size="large" color="#00FFFF" />
      <Text>Please wait...</Text>
    </View>
  );
};
