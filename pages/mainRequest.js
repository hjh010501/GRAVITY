import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";

import styles from './style'
import RequestButton from '../components/requestbutton'
import RequestCard from '../components/requestcard'

export default class MainRequest extends React.Component {

    render() {
      return (
        <ScrollView>
          <View style={styles.container}>
            <View>
                <Text style={styles.hello}>안녕하세요</Text>
                <Text style={[styles.hello, styles.name]}>함종현님!😊</Text>
            </View>
            <TouchableOpacity style={{width: '100%', marginTop: 30}} onPress={() => this.props.navigation.navigate('First')}>
              <RequestButton style={styles.requestbutton}/>
            </TouchableOpacity>
            <View style={{width: '100%', flex: 1, alignItems: 'center', marginTop: 50}}>
              <RequestCard value='신청 목록' isRequestList={true}/>
            </View>
            </View>
        </ScrollView>
      );
    }
  }