import React from 'react'
import { Image, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Animated,{ FadeInUp, FlipInXDown, FlipInXUp, StretchInY } from 'react-native-reanimated';

const Login = () => {
  return (
    <View className='flex-1'>

      <StatusBar style='light'/>
      <Animated.Image entering={FadeInUp.delay(100).duration(1000)} className='flex-1 w-full h-[120%] absolute' source={require('../Resources/background.png')}  resizeMode="cover"/>
      <View className='flex-row justify-around absolute w-full'>
        <Animated.Image entering={FadeInUp.delay(800).duration(2000).springify()} className='h-[225] w-[90]' source={require('../Resources/light.png')}/> 
        <Animated.Image entering={FadeInUp.delay(1000).duration(2000).springify()} className='h-[160] w-[65] ' source={require('../Resources/light.png')}/>
      </View>

      <View className='h-full w-full flex justify-center items-center'>

       <View className='flex-1 mt-56 justify-center'>
            <Animated.Text className='text-white font-bold tranking-wider text-5xl'>
              Login
            </Animated.Text>
        </View>

       <View className='flex-1 item-center space-y-4 w-full px-4'>
            <Animated.View className='bg-black/5 p-4 rounded-2xl w-full'>
              <TextInput placeholder='Email' placeholderTextColor={'gray'}/>
            </Animated.View>
            <Animated.View  className='bg-black/5 p-4 rounded-2xl w-full'>
              <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry/>
            </Animated.View>
            <Animated.View entering={StretchInY.delay(800).duration(500)} className='w-full pt-8'>
              <TouchableOpacity className='bg-sky-400 p-3 rounded-2xl mb-3 items-center'>
                <Text className='text-xl font-bold text-white'>Login</Text>
              </TouchableOpacity>
            </Animated.View>
            <View className='justify-center flex-row'>
              <Text>Don't have a account?</Text>
              <TouchableOpacity>
                <Text className='text-sky-600'> SignUp </Text>
              </TouchableOpacity>
            </View>
       </View>

      </View>

    </View>
  )
}


export default Login
