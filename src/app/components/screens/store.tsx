import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

export default function Store() {
  return <View style={styles.cardContainer}></View>;
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 186,
    height: 180,
    borderRadius: 20,
    backgroundColor: "#a29bfe",

    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },

    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
});
