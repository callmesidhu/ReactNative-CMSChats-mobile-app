import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Animated,{ FadeInDown, FadeInUp} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

function SignUp(){

  const navigation = useNavigation();

  return (
    <View className='flex-1'>

      <StatusBar style='light'/>
      <Animated.Image entering={FadeInUp.delay(100).duration(300)} className='flex-1 w-full h-[100%] absolute' source={require('../Resources/background.png')}  resizeMode="cover"/>
      <View className='flex-row justify-around pl-5 absolute w-full'>
        <Animated.Image entering={FadeInUp.delay(1000).duration(1000).springify()} className='h-[200] w-[80]' source={require('../Resources/light.png')}/> 
       <Animated.Image entering={FadeInUp.delay(800).duration(1000).springify()} className='h-[160] w-[65] ' source={require('../Resources/light.png')}/>
       <Animated.Image entering={FadeInUp.delay(1400).duration(2000).springify()} className='h-[260] w-[100] ' source={require('../Resources/light.png')}/>
      </View>

      <View className='h-full w-full flex pt-32 pb-10 items-center'>

       <View className='flex-1 justify-center'>
            <Animated.Text entering={FadeInDown.delay(400)}  className='text-white font-bold tranking-wider text-5xl'>
              Sign Up
            </Animated.Text>
        </View>

       <View className='flex-1 item-center space-y-4 w-full px-4'>
            <Animated.View entering={FadeInDown.delay(400)} className='bg-black/5 p-4 rounded-2xl w-full'>
              <TextInput placeholder='Email' placeholderTextColor={'gray'}/>
            </Animated.View>
            <Animated.View  entering={FadeInDown.delay(600)} className='bg-black/5 p-4 rounded-2xl w-full'>
              <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry/>
            </Animated.View>
            <Animated.View  entering={FadeInDown.delay(800)}  className='bg-black/5 p-4 rounded-2xl w-full'>
              <TextInput placeholder='Confirm Password' placeholderTextColor={'gray'}/>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(1000).duration(500)}  className='w-full pt-8'>
              <TouchableOpacity className='bg-sky-400 p-3 rounded-2xl items-center'>
                <Text className='text-xl font-bold text-white'>Sign Up</Text>
              </TouchableOpacity>
            </Animated.View>
            <View className='justify-center flex-row'>
              <Text>I already have an account,</Text>
              <TouchableOpacity  onPress={() => navigation.navigate('LoginPage')} >
                <Text className='text-sky-600'> Login </Text>
              </TouchableOpacity>
            </View>
       </View>

      </View>

    </View>
  )
}


export default SignUp
