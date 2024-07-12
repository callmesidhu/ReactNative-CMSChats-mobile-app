import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Corrected import for Ionicons

const AIInteraction = ({ role, text, onSpeech }) => {
  return (
    <View style={[styles.chatItem, role === "user" ? styles.userChatItem : styles.modelChatItem]}>
      <Text style={{fontSize: heightPercentageToDP(1.9)}}>{text}</Text>
      {role === "model" && (
        <TouchableOpacity onPress={onSpeech} style={styles.speechButton}>
          <Ionicons name='volume-high-outline' size={24} color='rgb(34, 211, 238)' />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  chatItem: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    maxWidth: "70%",
    position: "relative",
  },
  userChatItem: {
    alignSelf: "flex-end",
    backgroundColor: "rgb(34, 211, 238)",
    borderColor: '#2196f3',
    borderWidth: 1,
  },
  modelChatItem: {
    alignSelf: "flex-start",
    backgroundColor: '#b3e5fc',
    borderColor: '#667eea',
    borderWidth: 1,
  },
  speechButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    marginLeft: 5,
    marginTop: 5,
  }
});

export default AIInteraction;


