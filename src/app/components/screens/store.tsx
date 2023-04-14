import { SafeAreaView, StyleSheet } from "react-native";
import { View, Image, Text, Pressable } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import Buttons from "./button";

export default function Store(props: any) {
  return (
    <SafeAreaView>

      <View style={{flexDirection:'column' ,marginRight:100,}}>
          <Feather name="chevron-left" size={40} color={"#751AA0"} />
        <Text style={{marginTop:40,marginRight:100 ,fontSize:16,fontWeight:'bold'}}>First let's Select the Store</Text>
        
         <View style={styles.imagesView}>

            <Image   source={require('../../../assets/images/bindawood.png')}/>
             <Image  source={require('../../../assets/images/panda.jpeg')}/>

         </View>
         <View style={styles.imagesView}>

            <Image   source={require('../../../assets/images/carrefour.jpeg')}/>
             <Image  source={require('../../../assets/images/danube.png')}/>

         </View>

         <View style={styles.imagesView}>

              <Image   source={require('../../../assets/images/lolo.jpeg')}/>
             <Image style={{height:160,width:160,marginTop:15}} source={require('../../../assets/images/othaim.png')}/>

         </View>
           
         </View>

        
        
         <Buttons>Next</Buttons>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  imagesView:{
    borderColor:"#9884BE",
    height:200,
    width:200,
    borderRadius:5,
    backgroundColor: "#FFFFFF",
    flexDirection:'row',
    
  
  },
});
