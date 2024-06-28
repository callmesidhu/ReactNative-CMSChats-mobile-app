import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase/config'; 
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('All fields are required!');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("Loader");
    } catch (error) {
      Alert.alert("Invalid email or password!");
    }
  }

  return (
    <View className='flex-1'>
      <StatusBar style='light' />
      <Animated.Image entering={FadeInUp.delay(100).duration(300)} className='flex-1 w-full h-[110%] absolute' source={require('../Resources/background.png')} resizeMode="cover" />
      <View className='flex-row justify-around absolute w-full'>
        <Animated.Image entering={FadeInUp.delay(800).duration(1000).springify()} className='h-[225] w-[90]' source={require('../Resources/light.png')} />
        <Animated.Image entering={FadeInUp.delay(1200).duration(1000).springify()} className='h-[160] w-[65]' source={require('../Resources/light.png')} />
      </View>

      <View className='h-full w-full flex justify-center items-center'>
        <View className='flex-1 mt-32 justify-center'>
          <Animated.Text entering={FadeInDown.delay(400)} className='text-white font-bold tracking-wider text-5xl'>
            Login
          </Animated.Text>
        </View>

        <View className='flex-1 item-center space-y-4 w-full px-4'>
          <Animated.View entering={FadeInDown.delay(400)} className='bg-black/5 p-4 rounded-2xl w-full'>
            <TextInput
              onChangeText={setEmail}
              value={email}
              placeholder='Email'
              placeholderTextColor={'gray'}
            />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(600)} className='bg-black/5 p-4 rounded-2xl w-full'>
            <TextInput
              onChangeText={setPassword}
              value={password}
              placeholder='Password'
              placeholderTextColor={'gray'}
              secureTextEntry
            />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(800).duration(500)} className='w-full pt-8'>
            <TouchableOpacity className='bg-sky-400 p-3 rounded-2xl items-center' onPress={handleLogin}>
              <Text className='text-xl font-bold text-white'>Login</Text>
            </TouchableOpacity>
          </Animated.View>
          <View className='justify-center flex-row'>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')}>
              <Text className='text-sky-600'> SignUp </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Login;
