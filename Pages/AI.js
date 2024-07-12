import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { Image } from 'expo-image';
import { blurhash } from '../Context/assets';
import Animated, { SlideInDown, SlideInRight } from 'react-native-reanimated';
import axios from 'axios';
import { speak, isSpeakingAsync, stop } from 'expo-speech'
import { API_KEY } from '../Context/assets';
import AIInteraction from '../Components/AIInteraction';
import { ActivityIndicator } from 'react-native';
import LottieView from 'lottie-react-native';

export default function AI() {
  const navigation = useNavigation();
  const [chat, setChat] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState(null);
  const animation = useRef(null);

  const handleUserInput = async () =>{
    let updatedChat = [
      ...chat,
      {
        role: 'user',
        parts: [{text: userInput}],
      },
    ];

    setLoading(true);

    try{
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
        {
          contents : updatedChat,
        }
      );
      console.log("Gemini ",response.data);
      const modelResponse = response.data?.candidates?.[0]?.content?.parts?.text || "";
      if(modelResponse){
        const updatedChatWithModel = [
          ...updatedChat,
          {
            role : "model",
            parts : [{ text: modelResponse }],
          },
        ];

          setChat(updatedChatWithModel);
          setUserInput("");
      }
    }catch(error){
          console.error("Error calling API: ", error);
          console.error("Error response: ", error.response);
          setError("An error occurred. Please try again.");
          } finally {
            setLoading(false);
          }
  };
  
  const handleSpeech = async ( text )=>{
    if(isSpeaking){
      stop();
      setIsSpeaking(false);
    }else{
      if(!(await isSpeakingAsync())){
        speak(text);
        setIsSpeaking(true);
      }
    }
  };
  const renderChatItem = ({ item }) => (
    <AIInteraction
      role = {item.role}
      text = {item.parts[0].text}
      onSpeech={()=> handleSpeech(item.parts[0].text)}
    />
  );
 
  return (
    <View className='flex-1 bg-sky-600 '>
      <View className='justify-between flex-row w-[100%] h-24 px-5 items-center pt-10'>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Animated.View entering={SlideInRight.delay(100).duration(1000)} className='px-5 flex-row flex-1 justify-around p-3 mx-6 rounded-3xl pt-4 shadow items-center' style={{ backgroundColor: '#027ab8' }}>
          <View className='flex-1 flex-row items-center'>
            <Image
              className='float-left'
              style={{ height: heightPercentageToDP(6), aspectRatio: 1, borderRadius: 100 }}
              source={require('../Resources/AIAvatar.jpeg')}
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
            <Text className='mx-4 text-2xl text-white font-medium'>Android Kunjappy</Text>
          </View>
        </Animated.View>
      </View>
      <Animated.View entering={SlideInDown.delay(0).duration(1200)} style={{ backgroundColor: '#FEFFE9' }} className=' flex-1 m-4 rounded-3xl overflow-visible'>
        <View className='flex-1  rounded-3xl'>
          <FlatList 
            className=''
            data={chat}
            renderItem={renderChatItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.chatContainer}
          />
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
            <TouchableOpacity onPress={handleUserInput} className="bg-sky-700 p-4 rounded-full ">
              <Icon className='' name="send" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
    chatContainer:{
      flexGrow: 1,
      justifyContent: "flex-end"
    }
})


