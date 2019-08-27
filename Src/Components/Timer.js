import React, { Component } from "react";
import { Text, View } from "react-native";
import { Timer as styles } from "./Style";
export default class Timer extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <View style={styles.ViewNum}>
          <Text style={styles.SecText}>{this.props.SecText}</Text>
          <Text style={styles.MinText}>{this.props.MinText}</Text>

          <Text style={styles.HourText}>{this.props.HourText}</Text>
        </View>
      </View>
    );
  }
}
