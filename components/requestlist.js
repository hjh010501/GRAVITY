import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";

import styles from './style'
import RequestModel from './requestmodel'

export default class RequestList extends React.Component {
    
    
    render() {
        return (
            <View>
                <RequestModel  date='2019.05.20(월) 16시' start='서울특별시 관악구 관악로 1 서울대학교' end='대전광역시 유성구 대학로 291 한국과학기술원'></RequestModel>
                <RequestModel date='2019.05.20(월) 16시' start='서울특별시 관악구 관악로 1 서울대학교' end='대전광역시 유성구 대학로 291 한국과학기술원'></RequestModel>
                <RequestModel date='2019.05.20(월) 16시' start='서울특별시 관악구 관악로 1 서울대학교' end='대전광역시 유성구 대학로 291 한국과학기술원'></RequestModel>
            </View>
        )
    }
}
