import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { Image } from 'expo-image';
import { blurhash } from '../Context/assests';
import MessageSection from '../Components/MessageSection';
import { useAuth } from '../Context/authContext';
import { getRoomId } from '../Context/getRoomId';
import { addDoc, collection, doc, getDocs, onSnapshot, orderBy, query, setDoc, Timestamp, where } from 'firebase/firestore';
import { db, usersRef } from '../firebase/config';
import Animated, { SlideInDown, SlideInRight } from 'react-native-reanimated';




export default function AI() {
 
const navigation = useNavigation()
  return (
    <View className='flex-1 bg-sky-600 '>
      <View className='justify-between flex-row w-[100%] h-24 px-5 items-center pt-10'>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Animated.View entering={SlideInRight.delay(100).duration(1000)} className='px-5 flex-row flex-1 justify-around p-3 mx-6 rounded-3xl pt-4 shadow items-center' style={{backgroundColor:'#027ab8'}}>
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
      <Animated.View entering={SlideInDown.delay(0).duration(1200)} style={{backgroundColor: '#FEFFE9'}} className=' flex-1 m-4 rounded-3xl overflow-visible'>
             <View className='flex-1 items-center justify-center'>
               <Text>Available in V2.0!</Text>
             </View>
          </Animated.View>
          <Animated.View entering={SlideInDown.delay(600).duration(700)} style={{marginBottom: heightPercentageToDP(1.0), marginTop: heightPercentageToDP(1.0)}}>
              <View className="flex-row items-center mx-3">
                <View className='flex flex-row'>
                <View className="flex-1 justify-between bg-neutral-100 border border-indigo-900 p-2 rounded-full mx-2">
                    <TextInput 
               //         onChangeText={(value) => (textRef.current = value)}
                        placeholder='Type a message...'
                        style={{fontSize: heightPercentageToDP(2)}}
                        className='flex-1 mx-2'
                    />
                  </View>
                  <TouchableOpacity  className="bg-sky-700 p-4 rounded-full ">
                       <Icon className='' name="send" size={20} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
             </Animated.View>
    </View>
  );
}
