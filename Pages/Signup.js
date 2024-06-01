import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Animated,{ FadeInDown, FadeInUp} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from "expo-image-picker";
import { useState } from 'react';


function SignUp(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);

  const handleSignup = () => {
    // For demonstration, simply display an alert with the input values.
    // In a real app, you would send these values to your backend server for signup.
    console.log(`Name: ${name}\nEmail: ${email}\nPassword: ${password}\nImage: ${image}`);
    };

   
    const navigation = useNavigation();

    // Stores the selected image URI 
    const [file, setFile] = useState(null); 
    
  
    // Stores any error message 
    const [error, setError] = useState(null); 
    
  
    // Function to pick an image from  
    //the device's media library 
    const pickImage = async () => { 
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync(); 
  
        if (status !== "granted") { 
  
            // If permission is denied, show an alert 
            Alert.alert( "Permission Denied", `Sorry, we need camera roll permission to upload images.`); 
        } else { 
  
            // Launch the image library and get 
            // the selected image 
            const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            }); 
  
            if (!result.cancelled) { 
              setImage(result.assets[0].uri);
            } 
        } 
    }; 

    const getImageName = (uri) => {
      return uri ? uri.split('/').pop() : 'Choose Profile Image';
    };
  
  return (
    <View className='flex-1'>

      <StatusBar style='light'/>
      <Animated.Image entering={FadeInUp.delay(100).duration(300)} className='flex-1 w-full h-[90%] absolute' source={require('../Resources/background.png')}  resizeMode="cover"/>
      <View className='flex-row justify-around pl-5 absolute w-full'>
        <Animated.Image entering={FadeInUp.delay(1000).duration(1000).springify()} className='h-[200] w-[80]' source={require('../Resources/light.png')}/> 
       <Animated.Image entering={FadeInUp.delay(800).duration(1000).springify()} className='h-[160] w-[65] ' source={require('../Resources/light.png')}/>
       <Animated.Image entering={FadeInUp.delay(1400).duration(2000).springify()} className='h-[260] w-[100] ' source={require('../Resources/light.png')}/>
      </View>

      <View className='h-full w-full flex pb-28 pt-20 items-center'>

       <View className='flex-1 justify-center mt-3'>
            <Animated.Text entering={FadeInDown.delay(400)}  className='text-white font-bold tranking-wider text-5xl'>
              Sign Up
            </Animated.Text>
        </View>


       <View className='flex-1 item-center space-y-4 w-full px-4'>

            <Animated.View entering={FadeInDown.delay(400)} className='bg-black/5 p-4 rounded-2xl w-full'>
              <TextInput onChangeText={setName} placeholder='Full Name' placeholderTextColor={'gray'}/>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(600)} className='bg-black/5 p-4 rounded-2xl w-full'>
              <TextInput onChangeText={setEmail} placeholder='Email Address' placeholderTextColor={'gray'}/>
            </Animated.View>
            <Animated.View  entering={FadeInDown.delay(800)} className='bg-black/5 p-4 rounded-2xl w-full'>
              <TextInput onChangeText={setPassword} placeholder='Password' placeholderTextColor={'gray'} secureTextEntry/>
            </Animated.View>
            
            
            
            <Animated.View  entering={FadeInDown.delay(1000)}  className='bg-black/5 p-4 rounded-2xl w-full'>
            <TouchableOpacity  onPress={pickImage}> 
                <Text className='bold text-[16px] text-center text-sky-600'> 
                  {getImageName(image)} 
                </Text> 
            </TouchableOpacity> 
            </Animated.View>



            <Animated.View entering={FadeInDown.delay(1200).duration(500)}  className='w-full pt-8'>
              <TouchableOpacity className='bg-sky-400 p-3 rounded-2xl items-center' onPress={handleSignup}>
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
