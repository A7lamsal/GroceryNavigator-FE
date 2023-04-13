import { SafeAreaView, StyleSheet } from "react-native";
import { View, Image, Text, Pressable } from "react-native";

export default function Store(props: any) {
  return (
    <SafeAreaView>
    <View>
      <Text style={styles.containerText}>First let's Select the Store</Text>
       
      <View style={styles.images}>
        <Image
          source={require("../../../assets/images/danube.png")}
          style={styles.Image}
        />
        <Image
          source={require("../../../assets/images/bindawood.png")}
          style={styles.Image}
        />
        <Image
          source={require("../../../assets/images/othaim.png")}
          style={styles.Image}
        />
      </View>
      </View>
      
    
    <View >
       <Pressable style={styles.button}>
      <Text style={styles.text}>Next</Text>
       </Pressable>
       </View>
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  Image: {
    width: 190,
    height: 200,
  },
  images: {
    display: "flex",
    flexDirection: "row",
    flex: 3,
  },
  button: {
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#6B3EC6",
    paddingVertical: 12,
   paddingHorizontal: 32,
    width: "50%",
    //marginRight: "auto",
    //marginLeft: "auto",
    
    
    
  },
  text: {
    color: "white",
    marginRight: "auto",
    marginLeft: "auto",
  },
  containerText: {
    fontWeight: "bold",
  },
});
