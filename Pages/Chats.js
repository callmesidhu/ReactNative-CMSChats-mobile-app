import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { Image } from 'expo-image';
import { blurhash } from '../Context/assests';
import MessageSection from '../Components/MessageSection';
import { useAuth } from '../Context/authContext';
import { getRoomId } from '../Context/getRoomId';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';




export default function Chats({ route }) {
  const { item } = route.params; //other
  const { user } = useAuth(); //login
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const textRef = useRef('');
  

  useEffect(()=>{
      createRoomIfNotExists();
  },[])
  const createRoomIfNotExists = async()=>{
      let roomId = getRoomId(item?.userId, user?.uid)
      await setDoc(doc(db, 'rooms' , roomId),{
        roomId,
        createdAt: Timestamp.fromDate(new Date())
      });
  }
  
  const handleSendMessage = async ()=>{
      let message = textRef.current.trim()
  }

  return (
    <View className='flex-1 bg-sky-600 '>
      <View className='justify-between flex-row w-[100%] h-24 px-5 items-center pt-10'>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <View className='flex-1 flex-row ml-5 items-center'>
             <Image
                className='float-left'
                style={{ height: heightPercentageToDP(6), aspectRatio: 1, borderRadius: 100 }}
                source={{uri:item.imageUrl}}
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={500}
              />
            <Text className='mx-4 text-2xl text-white font-medium'>{item.name}</Text>
        </View>
        <View className='flex-1'>
        <View className='flex-row flex-1 justify-around p-3 mx-6 rounded-3xl pt-4 shadow items-center' style={{backgroundColor:'#027ab8'}}>
        <TouchableOpacity className='' onPress={() => alert('available in next update')}>
            <Icon name="phone" size={26} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className='' onPress={() => alert('available in next update')}>
            <Icon name="video-camera" size={25} color="white" />
          </TouchableOpacity>
        </View>
        </View>
        
      </View>
      <View className='flex-1 bg-white mt-3 rounded-t-3xl overflow-visible'>
             <View className='flex-1'>
               <MessageSection messages={messages}/>
             </View>
             <View style={{marginBottom: heightPercentageToDP(1.7)}}>
              <View className="flex-row items-center mx-3">
                <View className='flex-1 flex-row'>
                <View className="flex-1 justify-between bg-white border p-2 rounded-full mx-2">
                    <TextInput 
                        onChangeText={value=> textRef.current = value}
                        placeholder='Type a message...'
                        style={{fontSize: heightPercentageToDP(2)}}
                        className='flex-1 mx-2'
                    />
                  </View>
                  <TouchableOpacity onPress={handleSendMessage} className="bg-sky-600 p-4 rounded-full">
                       <Icon className='' name="send" size={20} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
             </View>
          </View>
    </View>
  );
}
