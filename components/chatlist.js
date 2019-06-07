import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";

import styles from './style'
import ChatModel from './chatmodel'
import ChatModelMe from './chatmodel-me'

export default class ChatList extends React.Component {
    
    
    render() {
        return (
            <View>
                <ChatModel></ChatModel>
                <ChatModel></ChatModel>
                <ChatModelMe></ChatModelMe>
                <ChatModel></ChatModel>
                <ChatModel></ChatModel>
                <ChatModel></ChatModel>
            </View>
        )
    }
}
