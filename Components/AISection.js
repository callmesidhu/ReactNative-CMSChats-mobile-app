import React, { useEffect, useRef, useState } from 'react'
import { ScrollView } from 'react-native'
import AIInteractionItem from './AIInteractionItem';

export default function AISection({messages, currentUser , question}) {
   
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
                return (<AIInteractionItem question={question} message={message} key={index} currentUser={currentUser}/>)
              })
            }
        </ScrollView>
  )
}