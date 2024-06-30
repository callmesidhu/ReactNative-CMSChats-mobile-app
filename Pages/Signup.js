import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { auth, getFirestore} from '../firebase/config'; // Adjust the path if necessary
import { blurhash as bh } from '../Context/assests';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from 'firebase/firestore';


function SignUp() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!name || !email || !password || !image) {
      Alert.alert('All fields are required!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
   //   console.log('Creating user with email and password...');
      const result = await createUserWithEmailAndPassword(auth, email, password);
    //  console.log('User created:', result.user.uid);

   //   console.log('Updating user profile...');
      await updateProfile(result.user, { displayName: name });
 //     console.log('User profile updated');


       // Upload image to Firebase Storage
       const response = await fetch(image);
       const blob = await response.blob();
       const storage = getStorage();
       const storageRef = ref(storage, `profile/${result.user.uid}`);
       const uploadTask = uploadBytesResumable(storageRef, blob);
      
       uploadTask.on(
         'state_changed',
         (snapshot) => {
           // Handle upload progress if needed
         },
         (error) => {
           console.error('Error uploading image:', error);
           Alert.alert('Error uploading image', 'Failed to upload image. Please try again.');
         },
         () => {
          // Upload completed successfully, get download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('Profile URL', downloadURL);
            
            str = password+bh+password;
            const spassword =  str.split("").reduce((acc, char) => char + acc, "");

            // Add user data to Firestore
            const firestore = getFirestore();
            const usersCollection = collection(firestore, 'users');
            addDoc(usersCollection, {
              name,
              email,
              password: spassword,
              imageUrl: downloadURL,
              userId: result.user.uid,
              createdAt: new Date().toDateString(), // Fixed date format method
            })
              .then(() => {
                Alert.alert("User created successfully!");
                navigation.navigate('Loader');
              })
              .catch((error) => {
                console.error("Error adding user:", error);
                Alert.alert("User creation failed!");
              });
          });
        }
      );

    } finally {
      setLoading(false);
    }
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Sorry, we need camera roll permission to upload images.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  const getImageName = (uri) => {
    return uri ? uri.split('/').pop() : 'Choose Profile Image';
  };

  return (
  
    <View className='flex-1'>
      <StatusBar style='light' />
      <Animated.Image
        entering={FadeInUp.delay(100).duration(300)}
        className='flex-1 w-full h-[90%] absolute'
        source={require('../Resources/background.png')}
        resizeMode='cover'
      />
      <View className='flex-row justify-around pl-5 absolute w-full'>
        <Animated.Image
          entering={FadeInUp.delay(1000).duration(1000).springify()}
          className='h-[200] w-[80]'
          source={require('../Resources/light.png')}
        />
        <Animated.Image
          entering={FadeInUp.delay(800).duration(1000).springify()}
          className='h-[160] w-[65]'
          source={require('../Resources/light.png')}
        />
        <Animated.Image
          entering={FadeInUp.delay(1400).duration(2000).springify()}
          className='h-[260] w-[100]'
          source={require('../Resources/light.png')}
        />
      </View>

      <View className='h-full w-full flex pb-28 pt-20 items-center'>
        <View className='flex-1 justify-center mt-3'>
          <Animated.Text entering={FadeInDown.delay(400)} className='text-white font-bold tracking-wider text-5xl'>
            Sign Up
          </Animated.Text>
        </View>

        <View className='flex-1 item-center space-y-4 w-full px-4'>
          <Animated.View entering={FadeInDown.delay(400)} className='bg-black/5 p-4 rounded-2xl w-full'>
            <TextInput onChangeText={setName} placeholder='Full Name' placeholderTextColor={'gray'} />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(600)} className='bg-black/5 p-4 rounded-2xl w-full'>
            <TextInput onChangeText={setEmail} placeholder='Email Address' placeholderTextColor={'gray'} />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(800)} className='bg-black/5 p-4 rounded-2xl w-full'>
            <TextInput onChangeText={setPassword} placeholder='Password' placeholderTextColor={'gray'} secureTextEntry />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(1000)} className='bg-black/5 p-4 rounded-2xl w-full'>
            <TouchableOpacity onPress={pickImage}>
              <Text className='bold text-[16px] text-center text-sky-600'>{getImageName(image)}</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(1200).duration(500)} className='w-full pt-8'>
            <TouchableOpacity className='bg-sky-400 p-3 rounded-2xl items-center' onPress={handleSignup}>
              <Text className='text-xl font-bold text-white'>
                {loading ? <ActivityIndicator color='white' /> : 'Sign Up'}
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <View className='justify-center flex-row'>
            <Text>I already have an account,</Text>
            <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
              <Text className='text-sky-600'> Login </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  
  );
}

export default SignUp;
