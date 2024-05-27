import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{height: '10%',backgroundColor: 'skyblue',width:'100%',alignItems:'center'}}>
      <Text className='mt-8 text-6xl font-black  text-blue-500'>Home</Text>
      </View>
      <View style={{margin:'10%',backgroundColor:'powderblue',width:'75%',height:'40%',}}>
      </View>
      <View style={{margin:'5%',width:'85%',height:'5%',flex:1,alignItems:'center'}}>
      <Text style={{fontWeight:'bold',marginTop:'20px',color:'white'}}>Welcome To Home Page</Text>
      </View>
      <View style={{margin:'2%',backgroundColor:'powderblue',width:'90%',height:'10%',}}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'steelblue'

  },
});
