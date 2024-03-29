/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      value: "Hello"
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("derived called", prevState);
    if (prevState) {
      return {
        value: `${prevState.value}, World!`
      };
    }
  }

  render() {
    const { value } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          If `prevState` is null then you will see 'Hello'
        </Text>
        <Text style={styles.instructions}>
          If `prevState` is non null then you will see 'Hello, World!'
        </Text>
        <Text style={styles.welcome}>{value}</Text>
        <Text style={styles.instructions}>
          Enable console too to see how many times `getDerivedStateFromProps`
          was called
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
