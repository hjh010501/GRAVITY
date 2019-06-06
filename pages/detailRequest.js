import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { MapView } from 'expo';

import styles from './style'
import RequestButton from '../components/requestbutton'
import RequestCard from '../components/requestcard'
import RequestList from '../components/requestlist'



export default class DetailRequest extends React.Component {

    render() {
      return (
        <ScrollView>
          <MapView
                style={{ flex: 1, width: '100%', height: 200 }}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
          />
          <View style={styles.container}>
            <View style={{width: '100%'}}>
              
              <View style={{width: '100%', flex: 1, alignItems: 'center'}}>
                <RequestCard value='출발 시간' content='2019.05.14(화) 8시'/>
                <RequestCard value='출발지' content='서울특별시 관악구 관악로 1 서울대학교'/>
                <RequestCard value='도착지' content='대전광역시 유성구 대학로 291 한국과학기술원'/>
                <RequestCard value='참가자' content='함종현, 윤석탄, 김우짹, 김평줘'/>
              </View>
              
              <TouchableOpacity style={{width: '100%', marginTop: 20}} onPress={() => this.props.navigation.navigate('chatRoom')}>
                <View style={styles.makeroom}>
                  <Text style={styles.makeroomtext}>채팅하기</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      );
    }
  }