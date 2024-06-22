import React, {useContext} from 'react';
import { View, Text, Alert } from 'react-native';
import { Image } from 'expo-image';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAuth } from '../Context/authContext';




export default function Home() {
  const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };


  return (
    <View className='flex-1'>
      <View className='justify-between flex-row bg-sky-600 w-[100%] rounded-b-3xl h-24 shadow-2xl shadow-black pt-12 px-5'>
        <Text className='text-2xl text-white font-medium'>Chats</Text>

        <View>
          <Menu>
            <MenuTrigger>
              <Image
                className='float-left'
                style={{ height: hp(4.3), aspectRatio: 1, borderRadius: 100 }}
                source="https://picsum.photos/seed/696/3000/2000"
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
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
    </View>
  );
}
