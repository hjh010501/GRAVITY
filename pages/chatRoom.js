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
import RequestButton from '../components/requestbutton'
import RequestCard from '../components/requestcard'

export default class chatRoom extends React.Component {

    render() {
      return (
        <View style={styles.chatcontainer}>
          <ScrollView>
            <View style={{width: '100%'}}>

            </View>
          </ScrollView>
          <View style={{ backgroundColor: '#fafafa', height: 75, width: '100%', paddingTop: 20}}>
          <View style={{width: '100%', flexWrap: 'wrap', 
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexDirection:'row', backgroundColor: '#fafafa', paddingLeft: 10, paddingRight: 25}}>
            <View style={{width: '90%'}}>
              <TextInput style={styles.chatinput} placeholderTextColor="#bfbfbf" placeholder="출발지"/>
            </View>
            <View style={{marginLeft: 10, width: '5%'}}>
            <TouchableOpacity>
                <View style={styles.sendbutton}>
                  <Text style={{}}>🖌</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          </View>
        </View>
      );
    }
  }