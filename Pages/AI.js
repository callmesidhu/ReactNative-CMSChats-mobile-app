import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { Image } from 'expo-image';
import { blurhash } from '../Context/assests';
import { useAuth } from '../Context/authContext';
import { getRoomId } from '../Context/getRoomId';
import { addDoc, collection, doc, getDocs, onSnapshot, orderBy, query, serverTimestamp, setDoc, Timestamp, where } from 'firebase/firestore';
import { db, usersRef } from '../firebase/config';
import Animated, { SlideInDown, SlideInRight } from 'react-native-reanimated';
import AISection from '../Components/AISection';

export default function AI() {
  const navigation = useNavigation();
  const itemId = 'AIBot';
  const { user } = useAuth(); // login
  const [messages, setMessages] = useState([]);
  const [profile, setProfile] = useState(['']);
  const textRef = useRef('');
  const inputRef = useRef(null);
  const [question, setQuestion] = useState('');

  const getUser = async () => {
    const q = query(usersRef, where('userId', '==', user?.uid));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach(doc => {
      data.push({ ...doc.data() });
    });
    setProfile(data[0]);
  };

  useEffect(() => {
    if (user?.uid) {
      getUser();
    }
  }, [user?.uid]);

  useEffect(() => {
    createRoomIfNotExists();
    let roomId = getRoomId(user?.uid, itemId);
    const docRef = doc(db, 'rooms', roomId);
    const messageRef = collection(docRef, 'messages');
    const q = query(messageRef, orderBy('createdAt', 'asc'));

    let unsubscribe = onSnapshot(q, (snapshot) => {
      let allMessages = snapshot.docs.map(doc => doc.data());
      setMessages([...allMessages]);
    });

    return unsubscribe;
  }, []);

  const createRoomIfNotExists = async () => {
    let roomId = getRoomId(itemId, user?.uid);
    await setDoc(doc(db, 'rooms', roomId), {
      roomId,
      createdAt: Timestamp.fromDate(new Date())
    });
  };

  const handleSendMessage = async () => {
    const message = textRef.current.trim();
    if (!message) return;
    try {
      const roomId = getRoomId(itemId, user?.uid);
      const docRef = doc(db, 'rooms', roomId);
      const messageRef = collection(docRef, 'messages');
      textRef.current = "";
      if (inputRef) {
        inputRef?.current?.clear();
      }
      await addDoc(messageRef, {
        userId: user?.uid,
        text: message,
        profileUrl: profile?.imageUrl,
        senderName: profile?.name,
        createdAt: serverTimestamp(),
      });
      setQuestion(message);  // Set the question after message is successfully sent
    } catch (err) {
      console.log('Message error:', err.message);
    }
  };

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
          <AISection question={question} messages={messages} currentUser={user} />
        </View>
      </Animated.View>
      <Animated.View entering={SlideInDown.delay(600).duration(700)} style={{ marginBottom: heightPercentageToDP(1.0), marginTop: heightPercentageToDP(1.0) }}>
        <View className="flex-row items-center mx-3">
          <View className='flex flex-row'>
            <View className="flex-1 justify-between bg-neutral-100 border border-indigo-900 p-2 rounded-full mx-2">
              <TextInput
                ref={inputRef}
                onChangeText={(value) => (textRef.current = value)}
                placeholder='Type a message...'
                style={{ fontSize: heightPercentageToDP(2) }}
                className='flex-1 mx-2'
              />
            </View>
            <TouchableOpacity onPress={handleSendMessage} className="bg-sky-700 p-4 rounded-full ">
              <Icon className='' name="send" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}
