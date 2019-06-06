import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";
import { withNavigation } from 'react-navigation';
import styles from './style'
import state from '../pages/mainRequest';
class ChatModel extends React.Component {

    state = {
        todetail: this.props.todetail
    };
    
    render() {
        return (
            <View style={{ marginLeft: 20, flexWrap: 'wrap', 
            alignItems: 'flex-start',
            flexDirection:'row',
            marginBottom: 20}}>
                <View style={{ width: '75%'}}>
                    
                </View>
                <View style={{ width: '25%', marginTop: 10}}>
                <Button
                    onPress={() => this.props.navigation.navigate('detailRequest')}
                    title="참가"
                    color="#362eff"
                />
                </View>
            </View>
        )
    }
}

export default withNavigation(RequestModel)