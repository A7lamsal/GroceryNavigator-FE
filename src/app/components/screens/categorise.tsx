import React from 'react';
import { View, Text, StyleSheet, Image ,SafeAreaView,TouchableOpacity} from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Categorise(props:any) {
  return (
    
    
    <View style={styles.contaner}>
        <SafeAreaView>
        <View style={styles.headerwarp}>
        <View style={styles.headerleft}>
                <Feather name="chevron-left"size={20}color={"#751AA0"}/>
            </View>
            
            <Text style={styles.titel}>Products</Text>
            
            <View style={styles.headerright}>
              <Feather name="shopping-cart"size={20} color={"#751AA0"} />
            </View>
            </View>

            <View style={styles.Image}>

              <Image source={require('../../../assets/images/strawberry.png')}/>
            </View>
            <View style={styles.icon}>
              <MaterialCommunityIcons name="fire" size={20} color={'#DB5D35'}/>
              <Text style={{color:'#372854',marginLeft:10}}>1000 Kal</Text>
                
               
                </View>

            
            <View style={styles.kgg}>
                  <View style={styles.iconmai}>
                     <Text >-</Text>
                  </View>
                      <Text >4 kg</Text>
                      <View style={styles.iconmai}>
                      <Text >+</Text>
                 </View>
                  </View>
                  
                  <View>
                  <Text style={{fontSize:32,marginTop:70,marginLeft:30}}>Strawberry</Text>
                  <View>

                    <Text style={{marginLeft:20,marginTop:20}}>Lorem ipsum dolor sit a met connecter.
                     Quique id eulimid portico id portico in sed. Laurent pulvinar rises 
                      sagittas so dales. Sapiens getas id sapiens libero laborites in laces mauri's. 
                      Malasada commode crass poseur eu sit lectors Fringilla.
                       Rhonchus laborites various et ipsum deque dictum trips lorem nets.
                        Clamorer nullar utricles at a met</Text>
                  </View>

                  </View>

                  <TouchableOpacity >
                    <View style={styles.add}>
                       <Text style={styles.addcart}>Add To Cart</Text>
                    </View>
                       
                  </TouchableOpacity>
                    
                  
            </SafeAreaView>
      </View>
    );
  };
  

const styles = StyleSheet.create({
    contaner:{

      flex:1,
      backgroundColor:'#FDFCFF',
      
    },

    headerwarp:{

      flexDirection:'row',
      justifyContent:'space-between',
     // alignItems:'center',
      paddingHorizontal:20,
      paddingTop:50,
    },

    headerleft:{
      borderColor:'#E6D9FF',
      borderWidth:2,
      padding:12,
      borderRadius:10,
    },
    
    headerright:{
      borderColor:'#E6D9FF',
      borderWidth:2,
      padding:12,
      borderRadius:10,
    },
   
    titel:{

      fontSize:32,
    },
    Image:{
      justifyContent:'center',
      alignItems:"center",
      marginTop:20,
    },
    icon:{
      flexDirection:'row',
      alignItems:'center',
      marginLeft:30,
    },
    kgg:{
     marginTop:20,
    alignItems:"center",
    flexDirection:"row",
    justifyContent:'center',
    marginRight:40,

    },
    iconmai:{

         borderColor:'#6B3EC6',
         backgroundColor:'#6B3EC6',
         borderWidth:1,
         borderRadius:5,
         height:20,
         width:20,
         justifyContent:'center',
         alignItems:'center',
         
    },
    add:{

        marginTop:80,
        marginHorizontal:90,
        backgroundColor:'#6B3EC6',
       //borderRadius:20,
       height:50,
       shadowColor:'#000000',
       shadowOffset:{width:3,height:3},
       shadowOpacity:2,
       textShadowRadius:10,
       elevation:5,
      
       justifyContent:'center',
       alignItems:'center'
       


    },
    addcart:{
        color:'#ffffff'
    }
    
    
    
  });
  





 
 
