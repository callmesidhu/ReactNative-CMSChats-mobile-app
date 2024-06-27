import { View, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useRef } from 'react'
import ChatItem from './ChatItem'
import { useNavigation } from '@react-navigation/native';

export default function ChatList({ users, profile }) {
   const navigation = useNavigation();

 


  return (
          <View lassName='flex-1 pt-3'> 
            <FlatList 
               data={users} 
               showsVerticalScrollIndicator={false}
               keyExtractor={item => Math.random()} 
               renderItem={({item, index})=><ChatItem 
                  item={item}
                  navigation={navigation}
                  index={index}
                  profile={profile}
                  
                  />} 
            /> 
          </View> 
  )
}