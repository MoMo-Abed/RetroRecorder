import React, { Component } from "react";
import { View, Animated, Easing } from "react-native";
import PropTypes from "prop-types";
import wheel from "../../assets/wheel.png";
import { TapeParts as styles } from "./Style";
export default class TapeParts extends Component {
  constructor() {
    super();
    this.RotateValueHolder = new Animated.Value(0);
  }
  componentDidMount() {
    this.StartImageRotateFunction();
  }
  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0);
    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear
    }).start(() => this.StartImageRotateFunction());
  }
  static propTypes = {
    prop: PropTypes,
    ToggleCircle: PropTypes.bool.isRequired,
    StartAnimation: PropTypes.bool.isRequired
  };

  render() {
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    let Start = this.props.StartAnimation;
    return (
      <View>
        <Animated.Image
          source={wheel}
          style={[
            styles.RightImage,
            { transform: [{ rotate: Start ? RotateData : "0deg" }] }
          ]}
        />
        <Animated.Image
          source={wheel}
          style={[
            styles.LeftImage,
            { transform: [{ rotate: Start ? RotateData : "0deg" }] }
          ]}
        />
      </View>
    );
  }
}
