import React from 'react'
import { Image, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const Login = () => {
  return (
    <View className='flex-1'>

      <StatusBar style='light'/>
      <Image className='flex-1 w-full h-[120%] absolute' source={require('../Resources/background.png')}  resizeMode="cover"/>
      <View className='flex-row justify-around absolute w-full'>
        <Image className='h-[225] w-[90]' source={require('../Resources/light.png')}/> 
        <Image className='h-[160] w-[65] ' source={require('../Resources/light.png')}/>
      </View>

      <View className='h-full w-full flex justify-center items-center'>

       <View className='flex-1 mt-60 justify-center '>
            <Text className='text-white font-bold tranking-wider text-5xl'>
              Login
            </Text>
        </View>

       <View className='flex-1 item-center space-y-4 w-full px-4'>
            <View className='bg-black/5 p-4 rounded-2xl w-full'>
              <TextInput placeholder='Email' placeholderTextColor={'gray'}/>
            </View>
            <View className='bg-black/5 p-4 rounded-2xl w-full'>
              <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry/>
            </View>
            <View className='w-full pt-8'>
              <TouchableOpacity className='bg-sky-400 p-3 rounded-2xl mb-3 items-center'>
                <Text className='text-xl font-bold text-white'>Login</Text>
              </TouchableOpacity>
            </View>
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
