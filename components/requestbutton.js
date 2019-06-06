import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";

import styles from './style'

export default class RequestButton extends React.Component<{}> {
    render() {
        return (
            <View>
                 <Text style={[styles.requesttext]}>___________에서 출발하여</Text>
                 <Text style={[styles.requesttext]}>___________에 도착할 예정이며</Text>
                 <Text style={[styles.requesttext]}>__일 __시에 출발할 계획입니다.</Text>
            </View>
        )
    }
}
