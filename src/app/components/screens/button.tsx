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
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#6B3EC6",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 20,
    marginTop: 30,
    marginRight: "auto",
    marginLeft: "auto",
  },
});
