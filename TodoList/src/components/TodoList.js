import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import TodoItem from './TodoItem'

export default class ToDoList extends Component {

  render() {
    console.log("Log");
    console.warn("Warning");
    console.error("Error");


    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Todo List
        </Text>
        <View style={styles.content}>
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  item: {
    padding: 10
  }
});
