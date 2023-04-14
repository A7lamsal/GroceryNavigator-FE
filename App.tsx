import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Categorise from "./src/app/components/screens/categorise";
import Branch from "./src/app/components/screens/branch";
import Store from "./src/app/components/screens/store";
import SelectCategories from "./src/app/components/screens/selectCategories";
import Cart from "./src/app/components/screens/cart";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Store /> */}
      {/* <Branch /> */}
      {/* <Categorise /> */}
      <SelectCategories />
      {/* <Cart /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    // marginLeft: 15,
    // marginTop: 25,
  },
});
