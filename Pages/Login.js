import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Animated,{ FadeInDown, FadeInUp} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

function Login(){
  const navigation = useNavigation()
  
  return (
    <View className='flex-1'>

      <StatusBar style='light'/>
      <Animated.Image entering={FadeInUp.delay(100).duration(300)} className='flex-1 w-full h-[110%] absolute' source={require('../Resources/background.png')}  resizeMode="cover"/>
      <View className='flex-row justify-around absolute w-full'>
        <Animated.Image entering={FadeInUp.delay(800).duration(1000).springify()} className='h-[225] w-[90]' source={require('../Resources/light.png')}/> 
        <Animated.Image entering={FadeInUp.delay(1200).duration(1000).springify()} className='h-[160] w-[65] ' source={require('../Resources/light.png')}/>
      </View>

      <View className='h-full w-full flex justify-center items-center'>

       <View className='flex-1 mt-32 justify-center'>
            <Animated.Text entering={FadeInDown.delay(400)} className='text-white font-bold tranking-wider text-5xl'>
              Login
            </Animated.Text>
        </View>

       <View className='flex-1 item-center space-y-4 w-full px-4'>
            <Animated.View entering={FadeInDown.delay(400)} className='bg-black/5 p-4 rounded-2xl w-full'>
              <TextInput placeholder='Email' placeholderTextColor={'gray'}/>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(600)}  className='bg-black/5 p-4 rounded-2xl w-full'>
              <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry/>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(800).duration(500)}  className='w-full pt-8'>
              <TouchableOpacity className='bg-sky-400 p-3 rounded-2xl items-center'>
                <Text className='text-xl font-bold text-white'>Login</Text>
              </TouchableOpacity>
            </Animated.View>
            <View className='justify-center flex-row'>
              <Text>Don't have an account?</Text>
              <TouchableOpacity  onPress={() => navigation.navigate('SignUpPage')} >
                <Text className='text-sky-600'> SignUp </Text>
              </TouchableOpacity>
            </View>
       </View>

      </View>

    </View>
  )
}


export default Login
