import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAuth } from '../Context/authContext';
import ChatPreview from '../Components/ChatPreview';
import { blurhash } from '../Context/assests';


export default function Home() {
  const { logout } = useAuth();
 
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };


  return (
    <View className='flex-1'>
      <View className='justify-between flex-row bg-sky-600 w-[100%] rounded-b-3xl h-24 pt-12 px-5'>
        <Text className='text-2xl text-white font-medium'>Chats</Text>
        <View>
          <Menu>
            <MenuTrigger>
              <Image
                className='float-left'
                style={{ height: hp(4.3), aspectRatio: 1, borderRadius: 100 }}
                source=''
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={500}
              />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption onSelect={() => alert('Profile')}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name="user" size={20} color="black" />
                  <Text style={{ marginLeft: 10 }}>Profile</Text>
                </View>
              </MenuOption>
              <MenuOption onSelect={handleLogout}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name="sign-out" size={20} color="red" />
                  <Text style={{ marginLeft: 10, color: 'red' }}>Log Out</Text>
                </View>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </View>

    <ChatPreview/>
    </View>
  );
}
