import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { Image } from 'expo-image';
import { blurhash } from '../Context/assests';

export default function Chats({ route }) {
  const { item } = route.params;
  const navigation = useNavigation();

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
        <View className='flex-row flex-1 justify-around p-3 mx-8 rounded-3xl pt-4 shadow items-center' style={{backgroundColor:'#027ab8'}}>
        <TouchableOpacity className='' onPress={() => alert('Voice Call')}>
            <Icon name="phone" size={26} color="white" />
          </TouchableOpacity>
          <Text className='text-white text-3xl mb-2'>|</Text>
          <TouchableOpacity className='' onPress={() => alert('Video Call')}>
            <Icon name="video-camera" size={25} color="white" />
          </TouchableOpacity>
        </View>
        </View>
        
      </View>
      <View className='flex-1 bg-white mt-3 rounded-t-3xl overflow-visible'>
      
      </View>
    </View>
  );
}
