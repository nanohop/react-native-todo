import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  ActivityIndicator,
  Image,
  Platform
} from 'react-native';

import { Button, Text as NBText, Segment } from 'native-base'

import TodoItem from './TodoItem'
import CheckImage from '../images/check.png'
import { items } from '../lib/api'

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
    items: null,
    filter: 'All'
  }

  componentDidMount() {
    items('GET')
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
    items('POST', { task: newTask })
    .then(json => {
      this.setState({ items: json })
    })
  }

  updateTodo = (id, completed) => {
    items('PUT', { id, completed })
    .then(json => {
      this.setState({ items: json })
    })
  }

  deleteTodo = (id) => {
    items('DELETE', { id })
    .then(json => {
      this.setState({ items: json })
    })
  }

  filteredItems = () => {
    if(this.state.filter === 'Todo') {
      return this.state.items.filter(i => {
        return !i.completed
      })
    }
    if(this.state.filter === 'Complete') {
      return this.state.items.filter(i => {
        return i.completed
      })
    }
    return this.state.items
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
            <Segment>
              <Button 
                first 
                active={this.state.filter === 'All'}
                onPress={() => this.setState({ filter: 'All' })}
              >
                <NBText>All</NBText>
              </Button>
              <Button 
                active={this.state.filter === 'Todo'}
                onPress={() => this.setState({ filter: 'Todo' })}
              >
                <NBText>Todo</NBText>
              </Button>
              <Button 
                last 
                active={this.state.filter === 'Complete'}
                onPress={() => this.setState({ filter: 'Complete' })}
              >
                <NBText>Complete</NBText>
              </Button>
            </Segment>
          </View>

          {
            !this.state.items && <ActivityIndicator 
              size="large"
              color="#2288ee"
              style={{ marginTop: 20 }}
            />
          }

          <FlatList 
            data={this.filteredItems()}
            style={styles.content}
            renderItem={row => {
              return <TodoItem 
                item={row.item} 
                updateTodo={this.updateTodo}
                deleteTodo={this.deleteTodo}
              />
            }}
            keyExtractor={item => item.id}
          />

          <View style={styles.contentFooter}>
            <Button onPress={this.addItem}>
              <NBText style={
                Platform.select({
                  ios: { maxWidth: 200, textAlign: 'center' },
                  android: { width: 200, textAlign: 'center' }
                })
              }>Add Todo Item</NBText>
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
