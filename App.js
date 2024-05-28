import React from 'react';
import {View } from 'react-native';
import PageLoader from './Pages/PageLoader';

export default function App() {
  return (
    <View className='flex-1 justify-center'>
      <PageLoader/>
    </View>
  );
}

