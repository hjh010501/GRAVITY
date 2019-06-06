import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from "react-native";
import { Asset, Font } from 'expo';
import RootNav from './components/navigation';

export default class App extends Component {

  state = {
    fonted: false
  }
  
  // async componentDidMount() {
  //   await Font.loadAsync({
  //     'KaiGenGothicKR-Light': require('./assets/fonts/KaiGenGothicKR-Light.ttf')
  //   })
  // }

  render() {
      return (<View style={{
        flex: 1, backgroundColor: '#f2f2f2'
      }}>
        <RootNav/>
      </View>);
  }
};