import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class TodoItem extends Component {

  state = {
    completed: false
  }

  toggleTodo = () => {
    this.setState({
      completed: !this.state.completed
    })
  }

  render() {
    return (
      <TouchableOpacity 
        onPress={this.toggleTodo}
        style={styles.itemButton}
      >
        <Text style={[styles.item, {
          opacity: (this.state.completed ? 0.5 : 1.0),
          textDecorationLine: (this.state.completed ? 'line-through' : 'none')
        }]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
  item: {
    padding: 20
  },
  itemButton: {
    borderBottomWidth: 1,
    borderColor: '#ccc'
  }
});
