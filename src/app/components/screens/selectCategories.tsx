import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import Buttons from "./button";

const data = [
  {
    img: require("../../../assets/images/drinks.png"),
    text: "Beverages",
  },
  {
    img: require("../../../assets/images/products.png"),
    text: "Products",
  },
  {
    img: require("../../../assets/images/meat.png"),
    text: "Meats",
  },
  {
    img: require("../../../assets/images/cleaning.png"),
    text: "Cleaning supplies",
  },
];

export default function SelectCategories() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.headerwarp}>
            <View style={styles.header}>
              <Feather name="chevron-left" size={20} color={"#751AA0"} />
            </View>
            <Text style={{ fontSize: 32 }}>Categories</Text>
            <View style={styles.header}>
              <Feather name="shopping-cart" size={20} color={"#751AA0"} />
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

          <View style={styles.searchcomponent}>
            <View style={styles.search}>
              <TextInput placeholder="Search" />
            </View>
            <Feather name="search" size={16} color={"#9884BE"} />
          </View>

          <View style={{ marginTop: 50 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Categories</Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {data.map((datas) => {
              return (
                <View style={styles.Image}>
                  <Image
                    source={datas.img}
                    style={{ width: 100, height: 100 }}
                  ></Image>
                  <Text>{datas.text}</Text>
                </View>
              );
            })}
          </View>

          <Buttons>Continue to Cart</Buttons>
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

  headerwarp: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: 15,
    // paddingTop: 20,
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

  headerstyle: {
    borderRadius: 10,
    // paddingHorizontal: 30,
    marginTop: 50,
    flexDirection: "row",
    // marginRight: 20,
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
  searchcomponent: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 30,
    borderRadius: 8,
    borderWidth: 1,
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#9884BE",
  },
  search: {
    flex: 1,
    marginLeft: 10,
  },
  searchText: {
    color: "#9884BE",
  },

  cateogiesTitle: {
    fontSize: 25,
  },
  Image: {
    marginTop: 30,
    borderColor: "#9884BE",
    backgroundColor: "#FFFFFF",
    shadowColor: "#9884BE",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 2,
    textShadowRadius: 10,
    elevation: 5,
    height: 150,
    borderRadius: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 150,
  },
});
