import React, { useEffect, useRef } from 'react'
import { ScrollView } from 'react-native'
import MessageItem from './MessageItem'

export default function MessageSection({messages, currentUser}) {


        useEffect(()=>{
          scrollToBottom();
        },[messages]);

        const scrollViewRef = useRef();
        const scrollToBottom = () => {
          scrollViewRef.current.scrollToEnd({ animated: true });
        };

  return (
        <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingTop: 10}}>
            {
              messages.map((message, index)=>{
                return (<MessageItem message={message} key={index} currentUser={currentUser}/>)
              })
            }
        </ScrollView>
  )
}