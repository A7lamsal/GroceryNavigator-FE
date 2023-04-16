import { View, Text, StyleSheet,Image, SafeAreaView } from 'react-native'
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function SelectBranch(props:any) {
  return (
    <SafeAreaView>
        <View >
            {/*header of the page  with image and text*/}
    <View style={styles.headerstyle}>
            <Image
              style={{ height: 70, width: 70, borderRadius: 20 }}
              source={require("../../../assets/images/danube.png")}
            />
            <View
              style={{ flexDirection: "column", marginTop: 10, marginLeft: 20 }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Danube</Text>
              <Text style={{ fontSize: 12, color: "#8D8D8D" }}>
                SA, Jeddah thaley branch
              </Text>
              </View>
              </View>
              {/*icons of location and texts */}
              <View style={styles.searchView}>

                
                 <View style={{flexDirection:'row',marginStart:10 ,marginTop:20 ,borderRadius:4,borderBottomWidth:1}}>
                <Ionicons name="location-outline" size={18} color={'#817893'}/>
            <Text style={{color:'#817893',fontSize:18}}>Jeddah, thaley branch </Text>
            <AntDesign name="check" size={18} color={'#6B3EC6'} style={{marginLeft:90}}/>
            </View>
            
            <View>
                 <View style={{flexDirection:'row',marginTop:15,borderRadius:4,borderBottomWidth:1,marginRight:100,}}>
                <Ionicons name="location-outline" size={18} color={'#817893'}/>
            <Text style={{color:'#817893',fontSize:18}}>Jeddah, thaley branch </Text>
            
            </View>
            </View>
            <View>
                 <View style={{flexDirection:'row',marginTop:15,borderRadius:4,borderBottomWidth:1 ,marginRight:100}}>
                <Ionicons name="location-outline" size={18} color={'#817893'}/>
            <Text style={{color:'#817893',fontSize:18}}>Jeddah, thaley branch </Text>
            
            </View>
            </View>
            <View>
                 <View style={{flexDirection:'row',marginStart:10,marginTop:15,borderRadius:4,borderBottomWidth:1,marginRight:100}}>
                <Ionicons name="location-outline" size={18} color={'#817893'}/>
            <Text style={{color:'#817893',fontSize:18}}>Jeddah, thaley branch </Text>
            
            </View>
            </View>
            <View>
                 <View style={{flexDirection:'row',marginStart:10,marginTop:15,borderRadius:4,borderBottomWidth:1,marginRight:100}}>
                <Ionicons name="location-outline" size={18} color={'#817893'}/>
            <Text style={{color:'#817893',fontSize:18}}>Jeddah, thaley branch </Text>
           
            </View>
            </View>
            <View>
                 <View style={{flexDirection:'row',marginStart:10,marginTop:15,borderRadius:4,borderBottomWidth:1,marginRight:100}}>
                <Ionicons name="location-outline" size={18} color={'#817893'}/>
            <Text style={{color:'#817893',fontSize:18}}>Jeddah, thaley branch </Text>
            
            </View>
            </View>
            <View>
                 <View style={{flexDirection:'row',marginStart:10,marginTop:15,borderRadius:4,borderBottomWidth:1,marginRight:100}}>
                <Ionicons name="location-outline" size={18} color={'#817893'}/>
            <Text style={{color:'#817893',fontSize:18}}>Jeddah, thaley branch </Text>
            
            </View>
            </View>
            <View>
                 <View style={{flexDirection:'row',marginStart:10,marginTop:15,borderRadius:4,borderBottomWidth:1,marginRight:100}}>
                <Ionicons name="location-outline" size={18} color={'#817893'}/>
            <Text style={{color:'#817893',fontSize:18}}>Jeddah, thaley branch </Text>
           
            </View>
            </View>
            <View>
                 <View style={{flexDirection:'row',marginStart:10,marginTop:15,borderRadius:4,borderBottomWidth:1,marginRight:100}}>
                 <Ionicons name="location-outline" size={18} color={'#817893'}/>
            <Text style={{color:'#817893',fontSize:18}}>Jeddah, thaley branch </Text>
            
            </View>
            </View>
            



                
          
            
            
            
            
          
           
          </View>
          {/* 2 buttom of the next and back */}
          <View style={{justifyContent:'space-between',flexDirection:'row',marginTop:50}}>

          
              <View style={styles.back}>
                <Text style={{color:'#471AA0'}}>Back</Text>
                </View>
                <View style={styles.next}>
                <Text style={{color:'#FFFFFF'}}>Next</Text>
                </View>
                
           
          </View>
          </View>
          
          </SafeAreaView>

  );
};

 const styles= StyleSheet.create({
 
  
    headerstyle:{
        
        borderRadius: 10,
        paddingHorizontal: 30,
        marginTop:100,
        flexDirection: "row",
        marginRight: 20,
        marginLeft:20,
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
    searchView:{
       marginTop:30,
       borderRadius:8,
       paddingHorizontal:15,
       flexDirection: 'column',
       marginRight:20,
       marginLeft:20,
       borderColor: "#9884BE",
       backgroundColor: "#FFFFFF",
       shadowColor: "#9884BE",
       shadowOffset: { width: 1, height: 1 },
       shadowOpacity:1,
       textShadowRadius: 10,
       elevation: 5,
       height: 450,
       alignItems: "center",
       gap: 8,



    },
    next:{

        marginHorizontal:20,
        //marginLeft: 90,
        backgroundColor: "#6B3EC6",
        borderRadius: 7,
        height: 40,
        //flexDirection: "row",
        width: 150,
        marginRight:30,
        shadowColor: "#000000",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 2,
        textShadowRadius: 10,
        elevation: 5,
        justifyContent: "center",
        alignItems: "center",
      },
      back:{
        
        marginHorizontal: 20,
        marginRight: 90,
        backgroundColor: "#FFFFFF",
        borderRadius: 7,
        height: 40,
       // flexDirection: "row",
        width: 150,
        shadowColor: "#000000",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 2,
        textShadowRadius: 10,
        elevation: 5,
        justifyContent: "center",
        alignItems: "center",
      }
    
});