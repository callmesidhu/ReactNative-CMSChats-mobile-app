import { View, FlatList } from 'react-native'
import React from 'react'
import ChatItem from './ChatItem'

export default function ChatList({users}) {
  return (
          <View className='flex-1 pt-3'> 
            <FlatList 
               data={users} 
               renderItem={({item, index})=><ChatItem item={item}/>} 
               showsVerticalScrollIndicator={false}
               keyExtractor={item => Math.random()} 
            /> 
          </View> 
  )
}