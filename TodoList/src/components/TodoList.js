import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar
} from 'react-native';

import TodoItem from './TodoItem'

export default class ToDoList extends Component {

  render() {

    const items = [
      "1. Go to the store",
      "2. Get the milk",
      "3. Bring it back"
    ]

    const thirdTask = "Bring it back"
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Todo List
          </Text>
        </View>

        <View style={styles.contentWrapper}>

          <View style={styles.contentHeader}>
            <Text>Content Header</Text>
          </View>

          <FlatList 
            data={items}
            style={styles.content}
            renderItem={row => {
              return <TodoItem title={row.item} />
            }}
            keyExtractor={item => item}
          />

          <View style={styles.contentFooter}>
            <Text>Content Footer</Text>
          </View>

        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    padding: 10,
    paddingTop: 20,
    alignSelf: 'stretch',
    backgroundColor: '#2288ee',
    borderBottomWidth: 1,
    borderColor: '#0066cc'
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff'
  },
  item: {
    padding: 10
  },
  content: {
    flex: 1,
    alignSelf: 'stretch'
  },
  contentWrapper: {
    flex: 1
  },
  contentHeader: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentFooter: {
    height: 50,
    borderTopWidth: 1,
    borderColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
