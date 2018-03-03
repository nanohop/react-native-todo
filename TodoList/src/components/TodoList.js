import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  ActivityIndicator,
  Image
} from 'react-native';

import { Button, Text as NBText } from 'native-base'

import TodoItem from './TodoItem'

import CheckImage from '../images/check.png'

export default class ToDoList extends Component {

  static navigationOptions = {
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Image 
        style={[styles.icon, { tintColor }]} 
        source={CheckImage} 
      />
    ),
    tabBarLabel: 'List'
  }
 
  state = {
    items: null
  }

  componentDidMount() {
    fetch("http://localhost:3000/items.json")
      .then(response => response.json())
      .then(items => {
        this.setState({ items })
      })
  }

  addItem = () => {
    this.props.navigation.navigate(
      'AddTodo',
      { saveItem: this.saveItem }
    )
  }

  saveItem = newTask => {
    const headers = new Headers()
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json')

    fetch("http://localhost:3000/items.json", {
      method: 'POST',
      headers,
      body: JSON.stringify({
        task: newTask
      })
    })
    .then(response => response.json())
    .then(json => {
      this.setState({ items: json })
    })
  }

  updateTodo = (id, completed) => {
    const headers = new Headers()
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json')

    fetch("http://localhost:3000/items.json", {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        id,
        completed
      })
    })
    .then(response => response.json())
    .then(json => {
      this.setState({ items: json })
    })
  }

  render() {
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

          {
            !this.state.items && <ActivityIndicator 
              size="large"
              color="#2288ee"
              style={{ marginTop: 20 }}
            />
          }

          <FlatList 
            data={this.state.items}
            style={styles.content}
            renderItem={row => {
              return <TodoItem 
                item={row.item} 
                updateTodo={this.updateTodo}
              />
            }}
            keyExtractor={item => item.id}
          />

          <View style={styles.contentFooter}>
            <Button onPress={this.addItem}>
              <NBText>Add Item</NBText>
            </Button>
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
    padding: 20,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  icon: {
    height: 24,
    resizeMode: 'contain'
  }
});
