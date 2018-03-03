import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class TodoItem extends Component {

  toggleTodo = () => {
    this.props.updateTodo(
      this.props.item.id,
      !this.props.item.completed
    )
  }

  render() {
    const item = this.props.item
    return (
      <TouchableOpacity 
        onPress={this.toggleTodo}
        style={styles.itemButton}
      >
        <Text style={[styles.item, {
          opacity: (item.completed ? 0.5 : 1.0),
          textDecorationLine: (item.completed ? 'line-through' : 'none')
        }]}>
          {item.task}
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
