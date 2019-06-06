import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button
} from "react-native";

import styles from './style'

export default class HomeScreen extends React.Component {
    render() {
      return (
        <ScrollView>
          <View style={styles.container}>
                <Text style={styles.hello}><Text style={{ fontWeight: "700" }}>6월</Text> 타임라인</Text>
            </View>
        </ScrollView>
      );
    }
  }