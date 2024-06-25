import { View, FlatList } from 'react-native'
import React from 'react'
import ChatItem from './ChatItem'
import { useNavigation } from '@react-navigation/native';

export default function ChatList({users}) {
   const navigation = useNavigation();
  return (
          <View className='flex-1 pt-3'> 
            <FlatList 
               data={users} 
               showsVerticalScrollIndicator={false}
               keyExtractor={item => Math.random()} 
               renderItem={({item, index})=><ChatItem 
                  item={item}
                  navigation={navigation}
                  index={index}
                  
                  />} 
            /> 
          </View> 
  )
}