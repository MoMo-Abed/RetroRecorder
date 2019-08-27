import { StyleSheet } from "react-native";

// style for buttons ./Buttons.js
const Buttons_Style = StyleSheet.create({
  ButtonView: {
    width: 80,
    height: 130,
    backgroundColor: "#1F2322",
    borderRadius: 10,
    marginTop: 37,
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    marginLeft: 5
  },
  BtnCircle: {
    borderRadius: 20,
    height: 70,
    width: 50,
    backgroundColor: "#2A2B2D",
    alignSelf: "center",
    marginTop: 25
  },
  BtnText: {
    marginTop: -65,
    alignSelf: "center",
    color: "white",
    fontSize: 10
  },
  BtnIcon: {
    marginTop: 5,
    alignSelf: "center"
  }
});

// style for ./RecordingCircle.js

const RecordingCircle = StyleSheet.create({
  CircleView: {
    borderRadius: 20,
    width: 25,
    height: 25,
    marginTop: -15,
    marginLeft: 280
  }
});

// style for ./TapeParts.js

const TapeParts = StyleSheet.create({
  RightImage: {
    width: 40,
    height: 40,
    marginTop: 380,
    marginLeft: 258,
    transform: [{ rotate: "180deg" }]
  },
  LeftImage: {
    width: 40,
    height: 40,
    marginBottom: 40,
    marginLeft: 100,
    marginTop: -40,
    opacity: 0.7
  }
});

// style for ./Timer.js

const Timer = StyleSheet.create({
  ViewNum: {
    marginTop: 120,
    marginLeft: 75,
    flexDirection: "row"
  },
  HourText: {
    fontSize: 15,
    marginLeft: -7,
    fontWeight: "bold",
    position: "absolute",
    marginTop: -15,
    marginLeft: -57
  },
  MinText: {
    fontSize: 15,
    marginLeft: -7,
    fontWeight: "bold",
    position: "absolute",
    marginTop: -15,
    marginLeft: -32
  },
  SecText: {
    fontSize: 15,
    marginLeft: -7,
    fontWeight: "bold",
    position: "absolute",
    marginTop: -15
  }
});

export { Buttons_Style, RecordingCircle, TapeParts, Timer };
