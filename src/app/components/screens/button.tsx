import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Buttons = ({ onPress, children }: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    borderRadius: 10,
    elevation: 3,
    width: 145,
    marginRight: "auto",
    marginLeft: "auto",
  },
});
