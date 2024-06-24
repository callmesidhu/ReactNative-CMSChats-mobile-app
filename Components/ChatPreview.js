import { View, Text, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import ChatList from './ChatList';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { useAuth } from '../Context/authContext';


export default function ChatPreview() {
          const { user } = useAuth();
          const [users, setUsers] = useState([1,2,3,4,5]);
          const getUsers = async()=>{

          }
          useEffect(()=>{
            if(user?.uid){
              getUsers();
            }
              
          },[])

  return (
    <View className='flex-1 bg-white pl-3 '>
      <StatusBar style='light'/>
        {
          users.length>0? (
            <ChatList users={users}/>
          ):(
            <View className='flex items-center' style={{top: heightPercentageToDP(30)}}>
              <ActivityIndicator size='large'/>
            </View>
          )
        }
    </View>
  )
}