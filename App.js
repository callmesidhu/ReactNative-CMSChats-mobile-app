import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{height: '10%',backgroundColor: 'skyblue',width:'100%',alignItems:'center'}}>
      <Text style={{fontSize:'30px',fontWeight:'bold',marginTop:'20px',color:'black'}}>Home</Text>
      </View>
      <View style={{margin:'10%',backgroundColor:'powderblue',width:'75%',height:'40%',}}>
      <Image style={{height:'100%',width:'100%'}} source={{uri:"https://t4.ftcdn.net/jpg/06/63/14/71/360_F_663147157_6zL8xKAqBJjehWJY7n26RfgOi33zFBwL.jpg"}} ></Image>
      </View>
      <View style={{margin:'5%',width:'85%',height:'5%',flex:1,alignItems:'center'}}>
      <Text style={{fontSize:'30px',fontWeight:'bold',marginTop:'20px',color:'white'}}>Welcome To Home Page</Text>
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
