import { View, Text } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

export default function MessageItem({message, currentUser}) {
          if(currentUser?.uid==message?.userId){
                    return (
                    <View className='flex-row flex-1 justify-end mb-3 mr-3'>
                              <View style={{width: widthPercentageToDP(80)}}>
                                        <View className='flex self-end p-3 rounded-2xl bg-cyan-400 border border-indigo-200'>
                                        <Text style={{fontSize: heightPercentageToDP(1.9)}}>{message?.text}</Text>
                                        </View>
                              </View>
                    </View>
                    )
}else{
          return(
                    <View className='flex-row flex-1 justify-start mb-3 ml-3'>
                    <View style={{width: widthPercentageToDP(80)}}>
                              <View className='flex self-start p-3 rounded-2xl bg-indigo-100 border border-sky-500'>
                              <Text style={{fontSize: heightPercentageToDP(1.9)}}>{message?.text}</Text>
                              </View>
                    </View>
                    </View>
          )
}
}