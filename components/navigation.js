import React, { Component } from "react";
import { createStackNavigator, StackNavigator } from 'react-navigation';
import { fromRight } from 'react-navigation-transitions';
// import { AppTabNavigator } from './bottombar';
import { createMaterialTopTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import MainRequest from '../pages/mainRequest'
import MainTimeline from '../pages/mainTimeline'
import AddRequest from '../pages/addRequest';
import DetailRequest from '../pages/detailRequest';
import ChatRoom from '../pages/chatRoom';
import { HeaderBackButton } from 'react-navigation';


const appStack = createStackNavigator(
  {
    addRequest: {
      screen: AddRequest,
      navigationOptions: ({navigation}) => ({ //don't forget parentheses around the object notation
      title: '방만들기',
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
      })
    },
    detailRequest: {
      screen: DetailRequest,
      navigationOptions: ({navigation}) => ({ //don't forget parentheses around the object notation
      title: '방',
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
      })
    },
    chatRoom: {
      screen: ChatRoom,
      navigationOptions: ({navigation}) => ({ //don't forget parentheses around the object notation
      title: '채팅',
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
      })
    }
  },
  {
    initialRouteName: 'addRequest',
    transitionConfig: () => fromRight(300),
  },
);

const AppTabNavigator = createMaterialTopTabNavigator({
    MainRequest: {
      screen: MainRequest,
      navigationOptions: {
        tabBarLabel: '신청',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-today" color={tintColor} size={24} />
        )
      }
    },
    MainTimeline: {
      screen: MainTimeline,
      navigationOptions: {
        tabBarLabel: '기록',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-timer" color={tintColor} size={24} />
        )
      }
    }
  }, {
      initialRouteName: 'MainRequest',
      // order: ['Settings', 'Home'],
      tabBarPosition: 'bottom',
      swipeEnabled: true,
      animationEnabled: false,
      tabBarOptions: {
        activeTintColor: '#362eff',
        inactiveTintColor: '#a7a7a7',
        style: {
          backgroundColor: '#ffffff',
          borderTopWidth: 0.5,
          borderTopColor: '#ffffff'
        },
        indicatorStyle: {
          top: 0,
          borderTopWidth: 2,
          borderTopColor: '#362eff'
        },
        showIcon: true
      }
    })


const RootNav = StackNavigator({
  app: {screen: AppTabNavigator},
  First: { screen: appStack }
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false
    },
});

export default RootNav;