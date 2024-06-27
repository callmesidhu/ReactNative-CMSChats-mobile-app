import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useContext, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../Context/authContext';
import LottieView from 'lottie-react-native';



export default function PageLoader() {
  const navigation = useNavigation();
  const {isAuthenticated} = useContext(AuthContext); 
  const animation = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (isAuthenticated==true) {
        navigation.navigate("HomePage");
      } else {
        navigation.navigate("LoginPage");
      }
    }, 2000);
  }, [isAuthenticated]);
 

  return (
    <View className='flex-1 justify-center items-center'>
      <LottieView className='w-64 aspect-square' ref={animation} source={require('../Resources/loaderAnimation.json')} autoPlay loop ></LottieView>
      <Text className='text-xl text-cyan-800 font-semibold text-center'>Please wait 3s... or Retry</Text>
    </View>
  );
};
