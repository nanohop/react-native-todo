import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class AddTodo extends Component {

  state = {
    text: ''
  }

  onAdd = () => {
    console.log("Text", this.state.text)
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />

        <TextInput 
          style={styles.input} 
          onChangeText={text => this.setState({ text }) }
          value={this.state.text}
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={this.onAdd}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  button: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#0066cc',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
})

