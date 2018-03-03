
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Todo List
        </Text>
        <View style={styles.content}>
          <Text style={styles.item}>1. Go to the store</Text>
          <Text style={styles.item}>2. Get the milk</Text>
          <Text style={styles.item}>3. Bring it back</Text>
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
