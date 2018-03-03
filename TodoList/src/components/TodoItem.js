import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class TodoItem extends Component {

  render() {
    return <Text style={styles.item}>{this.props.title}</Text>
  }

}

const styles = StyleSheet.create({
  item: {
    padding: 10
  }
});
