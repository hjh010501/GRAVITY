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
class RequestModel extends React.Component {

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
                    <Text ellipsizeMode='tail' numberOfLines={1} style={styles.date}>{this.props.date}</Text>
                    <Text style={styles.location}>
                    {
                        ((this.props.start).length > 26) ? (((this.props.start).substring(0,26-3)) + '...') : this.props.start
                    }
                    </Text>
                    <Text style={styles.location}>
                    {
                        ((this.props.end).length > 26) ? (((this.props.end).substring(0,26-3)) + '...') : this.props.end
                    }
                    </Text>
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