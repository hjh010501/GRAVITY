import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";

import styles from './style'
import RequestList from './requestlist'

export default class RequestCard extends React.Component {
    
    render() {
        return (
            <View style={[styles.card]}>
                 <Text style={styles.cardtitle}>{this.props.value}</Text>
                    { this.props.isRequestList ? (<RequestList/>) : (<Text style={styles.cardcontent}>{this.props.content}</Text>) }
            </View>
        )
    }
}
