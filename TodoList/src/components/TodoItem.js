import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { Icon } from 'native-base'

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
        <Icon name={item.completed ? 'checkmark-circle' : 'radio-button-off'} />
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
    borderColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
  }
});
