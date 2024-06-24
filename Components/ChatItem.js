import React  from 'react'; 
import{ StyleSheet, Text, TouchableOpacity, View} from 'react-native'; 
import { blurhash } from '../Context/assests';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Image } from 'expo-image';
    
 export default function ChatItem({item}) { 

        return ( 
          <TouchableOpacity className='justify-between flex-1 flex-row mx-6 items-center gap-3 mb-4 pb-2 border-b border-b-neutral-200'>
            <Image 
                className='rounded-full'
                style={{ height: heightPercentageToDP(6),aspectRatio:1}}
                source=''
                placeholder={ {blurhash} }
                contentFit="cover"
                transition={500}
              />
              <View className='flex-1 gap-1'>
                <View className='flex-row justify-between'>
                  <Text style={{fontSize: heightPercentageToDP(1.8)}} className="font-semibold text-neutral-800">Sidhu</Text>
                  <Text style={{fontSize: heightPercentageToDP(1.6)}} className="font-medium text-neutral-800">Time</Text>
                </View>
                <Text style={{fontSize: heightPercentageToDP(1.6)}} className="font-medium text-neutral-500">
                  Last message
                </Text>
              </View>
          </TouchableOpacity>
          ); 
        } 
