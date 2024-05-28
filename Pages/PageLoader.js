import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export default function PageLoader() {
  return (
    <View className='flex-1 items-center justify-center'>
      <ActivityIndicator size='large' color='violet' ></ActivityIndicator>
    </View>
  )
}