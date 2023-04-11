import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Branch from "./src/app/components/screens/branch";
import Store from "./src/app/components/screens/store";
// import arrow from "../GroceryNavigator-FE/src/assets/icons/arrowleft.svg"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Store />
      {/* <Branch /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    backgroundColor: "#fff",
    marginLeft: 15,
    marginTop: 25,
  },
  image: {
    // flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: "auto",
  },
});
