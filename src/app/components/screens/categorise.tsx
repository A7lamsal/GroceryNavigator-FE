import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Buttons from "./button";
// import style from "../styles/styles";

export default function Categorise(props: any) {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <View style={style.container}></View> */}
        <View style={styles.wrapper}>
          <View style={styles.headerwarp}>
            <View style={styles.header}>
              <Feather name="chevron-left" size={20} color={"#751AA0"} />
            </View>
            <Text style={{ fontSize: 32 }}>Products</Text>
            <View style={styles.header}>
              <Feather name="shopping-cart" size={20} color={"#751AA0"} />
            </View>
          </View>

          <View style={styles.Image}>
            <Image source={require("../../../assets/images/strawberry.png")} />
          </View>

          <View style={styles.icon}>
            <MaterialCommunityIcons name="fire" size={20} color={"#DB5D35"} />
            <Text style={{ color: "#372854", marginLeft: 10 }}>1000 Kal</Text>
          </View>

          <View style={styles.kgg}>
            <View style={styles.iconmai}>
              <Text style={{ color: "#ffffff" }}>-</Text>
            </View>
            <Text>4 kg</Text>
            <View style={styles.iconmai}>
              <Text style={{ color: "#ffffff" }}>+</Text>
            </View>
          </View>

          <View style={{ gap: 15 }}>
            <Text style={{ fontSize: 32, marginTop: 70, fontWeight: "bold" }}>
              Strawberry
            </Text>
            <View>
              <Text>
                Lorem ipsum dolor sit a met connecter. Quique id eulimid portico
                id portico in sed. Laurent pulvinar rises sagittas so dales.
                Sapiens getas id sapiens libero laborites in laces mauri's.
                Malasada commode crass poseur eu sit lectors Fringilla. Rhonchus
                laborites various et ipsum deque dictum trips lorem nets.
                Clamorer nullar utricles at a met
              </Text>
            </View>
          </View>

          <Buttons>Add to Cart</Buttons>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FDFCFF",
    gap: 15,
    margin: 20,
  },

  headerwarp: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  header: {
    borderColor: "#E6D9FF",
    borderWidth: 2,
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  Image: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: "50",
  },
  kgg: {
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    // marginRight: 40,
  },
  iconmai: {
    borderColor: "#6B3EC6",
    backgroundColor: "#6B3EC6",
    borderWidth: 1,
    borderRadius: 5,
    height: 20,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  add: {
    marginTop: 80,
    marginHorizontal: 90,
    backgroundColor: "#6B3EC6",
    //borderRadius:20,
    height: 50,
    shadowColor: "#000000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 2,
    textShadowRadius: 10,
    elevation: 5,

    justifyContent: "center",
    alignItems: "center",
  },
  addcart: {
    color: "#ffffff",
  },
});
