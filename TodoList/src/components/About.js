import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

import AboutImage from '../images/star.png'

export default class About extends Component {

  static navigationOptions = {
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Image 
        style={[styles.icon, { tintColor }]} 
        source={AboutImage} 
      />
    ),
    tabBarLabel: 'About'
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={{
          fontSize: 20,
          textAlign: 'center',
          padding: 20
        }}>
          About
        </Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  icon: {
    height: 24,
    resizeMode: 'contain'
  }
})
