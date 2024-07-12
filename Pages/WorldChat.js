import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { Image } from 'expo-image';
import Animated, { SlideInDown, SlideInRight } from 'react-native-reanimated';
import axios from 'axios';
import { speak, isSpeakingAsync, stop } from 'expo-speech';
import { blurhash } from '../Context/assets';
import AIInteraction from '../Components/AIInteraction';
import LottieView from 'lottie-react-native';

export default function WorldChat() {
  const navigation = useNavigation();
  const [chat, setChat] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState(null);
  const animation = useRef(null);
  const [intro, setIntro] = useState(true)


  return (
    <View className='flex-1 bg-blue-900 '>
      <View className='justify-between flex-row w-[100%] h-24 px-5 items-center pt-10'>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Animated.View entering={SlideInRight.delay(100).duration(1000)} className='px-5 flex-row flex-1 justify-around p-3 mx-6 rounded-3xl pt-4 shadow items-center'>
          <View className='flex-1 flex-row items-center justify-center'>
           <View><LottieView className='w-16 aspect-square ' ref={animation} source={require('../Resources/worldChatLogo.json')} autoPlay loop ></LottieView></View>
            <Text className='mr-8 ml-3 text-2xl text-white font-semibold'>World Chat</Text>
          </View>
        </Animated.View>
      </View>
      <Animated.View entering={SlideInDown.delay(0).duration(1200)} style={{ backgroundColor: '#FEFFE9' }} className=' flex-1 m-4 rounded-3xl overflow-visible'>
        <View className='flex-1  rounded-3xl px-5 '>
          {intro?(
            <View className="flex-1 justify-center items-center">
              <LottieView className='w-80 aspect-square' ref={animation} source={require('../Resources/WCIntro.json')} autoPlay loop ></LottieView>
            <Text className='text-lg text-center font-normal'>
                World Chat Comming Soon...
            </Text>
            </View>

         ):(
            <FlatList
            
          />
        )}
          {loading &&
            <View className='mb-3 items-center'>
              <LottieView className='w-28 aspect-square' ref={animation} source={require('../Resources/loaderAnimation.json')} autoPlay loop ></LottieView>
            </View>}
          {error && <Text className='text-rose-800'>{error}</Text>}
        </View>
      </Animated.View>
      <Animated.View entering={SlideInDown.delay(600).duration(700)} style={{ marginBottom: heightPercentageToDP(1.0), marginTop: heightPercentageToDP(1.0) }}>
        <View className="flex-row items-center mx-3">
          <View className='flex flex-row'>
            <View className="flex-1 justify-between bg-neutral-100 border border-indigo-900 p-2 rounded-full mx-2">
              <TextInput
                placeholder='Type a message...'
                style={{ fontSize: heightPercentageToDP(2) }}
                className='flex-1 mx-2'
                value={userInput}
                onChangeText={setUserInput}
              />
            </View>
            <TouchableOpacity className="bg-sky-700 p-4 rounded-full ">
              <Icon className='' name="send" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};
