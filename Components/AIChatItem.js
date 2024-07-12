import React, { useEffect, useRef, useState }  from 'react'; 
import{ ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'; 
import { blurhash, formatDate } from '../Context/assets';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
    
 export default function AIChatItem() { 


      const navigation = useNavigation();
      const animation =useRef(null)
      const openChatRoom = () =>{
          navigation.navigate('AIPage')
      }
 
        return ( 
                    <View className='pl-3'>
          <TouchableOpacity onPress={openChatRoom} className='justify-between flex-row items-center gap-3 mb-0 border-b border-b-neutral-200'>
            <Image 
                className='rounded-full mx-1'
                style={{ height: heightPercentageToDP(6),aspectRatio:1}}
                source={require('../Resources/AIAvatar.jpeg')} 
                placeholder={ {blurhash} }
                contentFit="cover"
                transition={2000}
              />
              <View className='flex-1 gap-1 flex-row justify-between'>
                <View className='flex-col justify-around pt-3 pb-1'>
                    
                  <Text style={{fontSize: heightPercentageToDP(1.8)}} className="font-semibold text-neutral-800">Android Kunjappy</Text>
                  <Text style={{fontSize: heightPercentageToDP(1.6)}} className="font-medium text-neutral-500">
                  &nbsp;&nbsp;Chat with our AI
                </Text>
                </View>
                  <LottieView
                className=' float-right'
                style={{ height: heightPercentageToDP(8),aspectRatio:1}}
                ref={animation} source={require('../Resources/AIBot.json')} autoPlay loop 
              />
                
             
              </View>
          </TouchableOpacity>
                    </View>
          

          ); 
        } 
