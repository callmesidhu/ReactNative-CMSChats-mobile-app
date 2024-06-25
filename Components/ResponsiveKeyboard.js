import { View, Text, Platform, KeyboardAvoidingView } from 'react-native'
import React, { Children } from 'react'
import { ScrollView } from 'react-native'




export default function ResponsiveKeyboard({children}) {
  return (
          <KeyboardAvoidingView 
                    style={{flex:1}}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <ScrollView
                    style={{flex:1}}
                    bounce={false}
                    showsVerticalScrollIndicator={false}>
                              {
                                        children
                              }
              </ScrollView>
                  
        </KeyboardAvoidingView>
  )
}