import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { blurhash } from '../Context/assests'
import { Image } from 'expo-image'


export default function AIInteractionItem({message, currentUser, question}) {



          if(currentUser?.uid==message?.userId){
                    return (
                    <View className='flex-row flex-1 justify-end mb-3 mr-3 rounded-2xl'>
                              <View className='flex-row-reverse items-end rounded-2xl' style={{width: widthPercentageToDP(80)}}>
                                        <Image
                                                  className='ml-1 rounded-2xl'
                                                  style={{ height: heightPercentageToDP(3), aspectRatio: 1, borderRadius: 100 }}
                                                  source={{uri:message?.profileUrl}}
                                                  placeholder={{ blurhash }}
                                                  contentFit="cover"
                                                  transition={10}
                                        />
                                        <View className='flex self-end p-3 rounded-2xl bg-cyan-400 border border-indigo-200'>
                                        <Text style={{fontSize: heightPercentageToDP(1.9)}}>{message?.text}</Text>
                                        </View>
                              </View>
                    </View>
                    )
}else{
          return(
                    <View className='flex-row flex-1 justify-start mb-3 ml-3 rounded-2xl'>
                     <View className='flex-row items-end' style={{width: widthPercentageToDP(80)}}>
                                     <Image
                                        className='mr-1'
                                        style={{ height: heightPercentageToDP(3), aspectRatio: 1, borderRadius: 100 }}
                                        source={{uri:message?.profileUrl}}
                                        placeholder={{ blurhash }}
                                        contentFit="cover"
                                        transition={10}
                              />
                              <View className='flex self-start p-3 rounded-2xl bg-sky-100 border border-sky-500'>
                              <Text style={{fontSize: heightPercentageToDP(1.9)}}>{question}</Text>
                              </View>
                    </View>
                    </View>
          )
}
}