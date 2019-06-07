import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";

import styles from './style'

import ChatList from '../components/chatlist'

export default class chatRoom extends React.Component {

    render() {
      return (
        <View style={styles.chatcontainer}>
          <ScrollView>
            <View style={{width: '100%', padding: 10}}>
              <ChatList></ChatList>
            </View>
          </ScrollView>
          <View style={styles.chatbottom}>
          <View style={styles.chatarray}>
            <View style={{width: '90%'}}>
              <TextInput style={styles.chatinput} placeholderTextColor="#bfbfbf" placeholder="출발지"/>
            </View>
            <View style={{marginLeft: 10, width: '5%'}}>
            <TouchableOpacity>
                <View style={styles.sendbutton}>
                  <Text>🖌</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          </View>
        </View>
      );
    }
  }