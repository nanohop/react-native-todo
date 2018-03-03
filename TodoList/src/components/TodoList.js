import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import TodoItem from './TodoItem'

export default class ToDoList extends Component {

  render() {
    const thirdTask = "Bring it back"
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Todo List
        </Text>
        <View style={styles.content}>
          <TodoItem title={"1. Go to the store"} />
          <TodoItem title={"2. " + "Get the milk"}/>
          <TodoItem title={`3. ${thirdTask}`} />
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
