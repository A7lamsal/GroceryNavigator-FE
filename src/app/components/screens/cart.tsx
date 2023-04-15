import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import Buttons from "./button";
import { LinearGradient } from "expo-linear-gradient";
import { color } from "react-native-elements/dist/helpers";

const data = [
  {
    img: require("../../../assets/images/Rectangle19.png"),
    text: "Watermelon (1KG)",
    price: "SAR 5.00/kg",
    total: "SAR 50.00",
  },
  // {
  //   img: require("../../../assets/images/drinks.png"),
  //   text: "Products",
  // },
  // {
  //   img: require("../../../assets/images/cleaning.png"),
  //   text: "Meats",
  // },
];

export default function Cart() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <View style={styles.headerIcon}>
              <Feather name="chevron-left" size={20} color={"#751AA0"} />
            </View>
            <View style={styles.headerTitle}>
              <Text style={{ fontSize: 30 }}>cart</Text>
            </View>
          </View>

          <View style={styles.headerstyle}>
            <Image
              style={{
                height: 70,
                width: 70,
                borderRadius: 20,
                marginLeft: 10,
              }}
              source={require("../../../assets/images/danube.png")}
            />
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: 20,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Danube</Text>
              <Text style={{ fontSize: 12, color: "#8D8D8D" }}>
                SA, Jeddah thaley branch
              </Text>
            </View>
          </View>

          <View>
            {data.map((datas) => {
              return (
                <View style={styles.Image}>
                  <Feather name="x-square" size={20} color={"#FF4D4D"} />
                  <Image
                    source={datas.img}
                    style={{ width: 70, height: 70 }}
                  ></Image>
                  <View style={{ gap: 3 }}>
                    <Text style={{ fontWeight: "bold" }}>{datas.text}</Text>
                    <Text style={{ color: "#817893" }}>{datas.price}</Text>
                    <Text style={{ fontWeight: "bold" }}>{datas.total}</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>+</Text>
                    <LinearGradient
                      colors={["#6B3EC6", "#471AA0"]}
                      style={{
                        width: 25,
                        height: 25,
                        borderRadius: 4,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {/* <View> */}
                      <Text
                        style={{
                          color: "#ffffff",
                        }}
                      >
                        10
                      </Text>
                      {/* </View> */}
                    </LinearGradient>
                    <Text style={{ fontSize: 20 }}>-</Text>
                  </View>
                </View>
              );
            })}
          </View>

          <View style={styles.pickup}>
            <Text style={{ color: "#9884BE" }}>Pickup date</Text>
          </View>

          <View style={{ display: "flex", gap: 10, flexDirection: "row" }}>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Total</Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>100</Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 14,
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    display: "flex",
                  }}
                >
                  .50 SAR
                </Text>
              </View>
            </View>
            <LinearGradient
              colors={["#6B3EC6", "#471AA0"]}
              style={{ borderRadius: 5, justifyContent: "center" }}
            >
              <Buttons>Order</Buttons>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  header: {
    flexDirection: "row",
    gap: 30,
  },
  headerIcon: {
    borderColor: "#E6D9FF",
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
    marginLeft: 20,
  },
  headerTitle: {
    alignItems: "center",
    justifyContent: "center",
  },
  headerstyle: {
    borderRadius: 10,
    marginTop: 50,
    flexDirection: "row",
    borderColor: "#9884BE",
    backgroundColor: "#FFFFFF",
    shadowColor: "#9884BE",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 2,
    textShadowRadius: 10,
    elevation: 5,
    height: 100,
    alignItems: "center",
    gap: 10,
  },
  Image: {
    display: "flex",
    flexDirection: "row",
    borderColor: "#9884BE",
    backgroundColor: "#FFFFFF",
    shadowColor: "#9884BE",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 2,
    textShadowRadius: 10,
    elevation: 5,
    borderRadius: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  pickup: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    marginTop: 30,
    borderRadius: 8,
    borderWidth: 1,
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#9884BE",
  },
});
