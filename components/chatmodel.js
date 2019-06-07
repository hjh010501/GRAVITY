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
export default class ChatModel extends React.Component {

    state = {
        todetail: this.props.todetail
    };
    
    render() {
        return (
            <View style={{ marginLeft: 20, flexWrap: 'wrap', 
            alignItems: 'flex-start',
            flexDirection:'row',
            marginBottom: 20}}>
                <View style={{ width: '15%'}}>
                <Image
                    style={{width: 35, height: 35, borderRadius: 17}}
                    source={{uri: 'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/53305580_2106777032946586_6851511154053742592_n.jpg?_nc_cat=110&_nc_ht=scontent-icn1-1.xx&oh=e4eb5ff9fa72ab042f0f5127db6ade41&oe=5D54FABF'}}
                />
                </View>
                <View style={{ width: '75%'}}>
                    <Text>윤석찬</Text>
                    <Text style={{backgroundColor: '#e4e4e4', maxWidth: '70%', padding: 10, borderRadius: 20, marginTop: 10}}>awdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawd</Text>
                </View>
            </View>
        )
    }
}