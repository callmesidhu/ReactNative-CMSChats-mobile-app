import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



  export default function Home() {
    const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    return (
          <View className='flex-1'>
            <View className='justify-between flex-row bg-sky-600 w-[100%] rounded-b-3xl h-24 shadow-2xl shadow-black pt-12 px-5'>
              <Text className='text-2xl text-white font-medium'>Chats</Text>
              <Image
                  className='float-left '
                  style={{height: hp(4.3), aspectRatio: 1, borderRadius: 100}}
                  source="https://picsum.photos/seed/696/3000/2000"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />

            </View>
          </View>
    )
  }