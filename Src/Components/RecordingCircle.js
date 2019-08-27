import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { RecordingCircle as styles } from "./Style";
export default class RecordingCircle extends Component {
  static propTypes = {
    prop: PropTypes,
    ToggleCircle: PropTypes.bool.isRequired
  };
  render() {
    let { ToggleCircle } = this.props;
    return (
      <View
        style={[
          styles.CircleView,
          { backgroundColor: ToggleCircle ? "red" : "#B70009" }
        ]}
      />
    );
  }
}
