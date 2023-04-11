import { StatusBar } from "expo-status-bar";
import {
 // StyleSheet,
 // Text,
  View,
  //ImageBackground,
  //Pressable,
  //Alert,
} from "react-native";
import Categorise from "./src/app/components/screens/categorise";
//import Branch from "./src/app/components/screens/branch";
//import Store from "./src/app/components/screens/store";
// import arrow from "../GroceryNavigator-FE/src/assets/icons/arrowleft.svg"
//fff


export default function App(){

  return(
    <View>
      <Categorise />
    </View>
  );
}
{/* 
export default function App() {
  const img = {
    uri: "../GroceryNavigator-FE/src/assets/icons/arrowleft.svg",
  };
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>First let's Select the Store</Text>
      <StatusBar style="auto" />
      <View>
        <Store />
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.text}>Next</Text>
      </Pressable>
      {/* <Branch /> */}
    
  
   // </View>
  //);
  //}


//const styles = StyleSheet.create({
 // container: {
   // flex: 1,
   // gap: 16,
   // backgroundColor: "#fff",
   // marginLeft: 15,
   // marginTop: 25,
 // },
  //image: {
    // flex: 1,
   // resizeMode: "cover",
   // justifyContent: "center",
    //height: "auto",
  //},
 // button: {
   // borderRadius: 4,
   // elevation: 3,
   // backgroundColor: "#6B3EC6",
    //paddingVertical: 12,
   // paddingHorizontal: 32,
   // width: "50%",
   // marginRight: "auto",
   // marginLeft: "auto",
  //},
  //text: {
  //  color: "white",
  //  marginRight: "auto",
  //  marginLeft: "auto",
  //},
  //containerText: {
  //  fontWeight: "bold",
  //},
//});
