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

export default class AddRequest extends React.Component {

    render() {
      return (
        <ScrollView>
          <View style={styles.container}>
            <View style={{width: '100%'}}>
              <TextInput style={styles.textinput} placeholderTextColor="#a7a7a7" placeholder="출발지"/>
              <TextInput style={styles.textinput} placeholderTextColor="#a7a7a7" placeholder="도착지"/>
              <TextInput style={styles.textinput} placeholderTextColor="#a7a7a7" placeholder="출발 날짜"/>
              
              <View style={{width: '100%', flex: 1, alignItems: 'center'}}>
                <RequestCard value='방 목록' isRequestList={true}/>
              </View>

              <TouchableOpacity style={{width: '100%', marginTop: 30}} onPress={() => this.props.navigation.navigate('First')}>
                <View style={styles.makeroom}>
                  <Text style={styles.makeroomtext}>신청하기</Text>
                </View>
              </TouchableOpacity>

            </View>
          </View>
        </ScrollView>
      );
    }
  }