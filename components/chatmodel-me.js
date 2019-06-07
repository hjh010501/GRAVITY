import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image
} from "react-native";
import { withNavigation } from 'react-navigation';
import styles from './style'
import state from '../pages/mainRequest';

export default class ChatModelMe extends React.Component {

    state = {
        todetail: this.props.todetail
    };
    
    render() {
        return (
            <View style={{marginBottom: 20, alignItems: 'flex-end'}}>
                    <Text style={{backgroundColor: '#015fff', color: '#fff', maxWidth: '70%', padding: 10, borderRadius: 20, marginTop: 10}}>awdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawd</Text>
            </View>
        )
    }
}