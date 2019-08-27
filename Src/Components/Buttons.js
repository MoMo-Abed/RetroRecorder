import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import PropTypes from "prop-types";
import { Buttons_Style as styles } from "./Style";
export default class Buttons extends Component {
  static propTypes = {
    prop: PropTypes,
    OnRecordPressed: PropTypes.func.isRequired,
    OnPlayPressed: PropTypes.func.isRequired,
    OnStopPressed: PropTypes.func.isRequired,
    OnSavePressed: PropTypes.func.isRequired,
    opacity: PropTypes.number.isRequired
  };
  render() {
    let { OnPlayPressed, OnRecordPressed, OnStopPressed, opacity } = this.props;
    return (
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity onPress={OnRecordPressed}>
            <View style={styles.ButtonView}>
              <View style={styles.BtnCircle} />
              <Text style={styles.BtnText}>REC</Text>
              <Entypo
                name="controller-record"
                size={30}
                style={styles.BtnIcon}
                color="white"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={OnPlayPressed}>
            <View
              style={[styles.ButtonView, { marginLeft: 5, opacity: opacity }]}
            >
              <View style={styles.BtnCircle} />
              <Text style={styles.BtnText}>PLAY</Text>
              <Entypo
                name="controller-play"
                size={30}
                style={styles.BtnIcon}
                color="white"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={OnStopPressed}>
            <View
              style={[styles.ButtonView, { marginLeft: 5, opacity: opacity }]}
            >
              <View style={styles.BtnCircle} />
              <Text style={styles.BtnText}>STOP</Text>
              <Entypo
                name="controller-stop"
                size={30}
                style={styles.BtnIcon}
                color="white"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
