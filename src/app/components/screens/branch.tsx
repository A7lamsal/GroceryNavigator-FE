import { View } from "react-native";
import { StyleSheet } from "react-native";

export default function Branch(props: any) {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.imgCard}></View>
      </View>
      <View style={styles.branchContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 32,
  },
  cardContainer: {
    width: 390,
    height: 150,
    borderRadius: 20,
    backgroundColor: "purple",
  },
  imgCard: {
    width: 120,
    height: 110,
    borderRadius: 20,
    backgroundColor: "#a29bfe",
  },
  branchContainer: {
    width: 390,
    height: 400,
    borderRadius: 20,
    backgroundColor: "red",
  },
});
