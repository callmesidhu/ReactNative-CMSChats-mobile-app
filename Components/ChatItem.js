import React, { useEffect, useRef, useState }  from 'react'; 
import{ ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'; 
import { blurhash, formatDate } from '../Context/assests';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Image } from 'expo-image';
import { collection, doc, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import { getRoomId } from '../Context/getRoomId';
import { db } from '../firebase/config';
import { useAuth } from '../Context/authContext';
    
 export default function ChatItem({ profile, item, navigation }) { 

      const [lastMessage ,setLastMessage]= useState(undefined);
      const {user} = useAuth();
    
      useEffect(()=>{
        let roomId = getRoomId(user?.uid, item?.userId);
        const docRef = doc(db, 'rooms',roomId);
        const messageRef = collection(docRef,'messages');
        const q = query(messageRef,orderBy('createdAt','desc'));
        
        let unsubscribe = onSnapshot(q, (snapshot)=>{
              let allMessages = snapshot.docs.map(doc=>{
                  return doc.data();
              });
              setLastMessage(allMessages[0]);
              
        })
        
        return unsubscribe;
    },[])


      const openChatRoom = () =>{
          navigation.navigate('ChatPage',{item})
      }

      const renderTime =()=>{
        if(typeof lastMessage == undefined){
          return 'Time';
        } else if(lastMessage){
           let date = lastMessage.createdAt;
            return formatDate(new Date(date?.seconds * 1000));
        }
        
      }

      const renderLastMessage =()=>{
        if(typeof lastMessage == undefined){
          return "Loading...";
        }
        else if (lastMessage) {
          if(user.uid == lastMessage.userId){
            return "You: "+lastMessage?.text;
          } else {
            return lastMessage?.text;
          }
        } else {
           return "  Say Hi 👋"
        }
      }

 
  
  
        return ( 
          <TouchableOpacity onPress={openChatRoom} className='justify-between flex-1 flex-row mx-6 items-center gap-3 mb-4 pb-2 border-b border-b-neutral-200'>
            <Image 
                className='rounded-full'
                style={{ height: heightPercentageToDP(6),aspectRatio:1}}
                source={{uri:item?.imageUrl}}
                placeholder={ {blurhash} }
                contentFit="cover"
                transition={2000}
              />
              <View className='flex-1 gap-1'>
                <View className='flex-row justify-between'>
                  <Text style={{fontSize: heightPercentageToDP(1.8)}} className="font-semibold text-neutral-800">{item?.name}</Text>
                  <Text style={{fontSize: heightPercentageToDP(1.6)}} className="font-medium text-neutral-800">{renderTime()}</Text>
                </View>
                <Text style={{fontSize: heightPercentageToDP(1.6)}} className="font-medium text-neutral-500">
                  {renderLastMessage()}
                </Text>
              </View>
          </TouchableOpacity>
          ); 
        } 
