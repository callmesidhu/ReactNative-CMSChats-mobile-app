import { Text, View} from 'react-native';
import React, {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';


export default function PageLoader() {
  const navigation = useNavigation();

  var isAuthenticated=false;

  useEffect(() => {
    setTimeout(()=>{
      if(!isAuthenticated){
        navigation.navigate("LoginPage");
      }else{
        navigation.navigate("HomePage");
      }
    },5000);
  }, [])


  return (
    <View className='flex-1 items-center justify-center bg-white'>
      
      <Text>Please Wait...</Text>
    </View>
  )
}