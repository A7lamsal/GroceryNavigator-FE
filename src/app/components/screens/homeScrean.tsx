import { View, Text, StyleSheet ,Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function HomeScrean(props:any) {
  return (
<SafeAreaView>
{/*headr name and icon */}
    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:50}}>
     <Text style={{fontSize:20,color:'#372854'}}>Hey</Text>
     <Feather name="bell" size={20} color={'#372854'}/>
    </View>
    <View>
        <Text style={{fontSize:25,color:'#372854',fontWeight:'bold'}}>Ahlam</Text>
    </View>
{/*image with texts*/}
    <View style={{marginTop:50}}>
    <Image source={require('../../../assets/images/green.png')}/>
    </View>
    <View style={{marginTop:50}}>
        <Text>grab you grocery </Text>
        <Text style={{fontWeight:'bold'}}>Lets' go and bring the grocery </Text>
    </View>

{/*image danube with texts and buttom */}
    <View style={styles.headerstyle}>
    <Image
      style={{ height: 70, width: 70 }}
      source={require("../../../assets/images/danube.png")}
    />
    <View
      style={{ flexDirection: "column", marginTop: 10, marginLeft: 20 }}
    >
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{ fontStyle:'normal', fontSize: 20 }}> Danube</Text>
      <Text style={{fontSize:10, color:'#838383',marginTop:6}}>20/02/2023</Text>
      </View>
      <Text style={{ fontSize: 12, color: "#8D8D8D" }}>
        SA, Jeddah 
      </Text>
      <View style={{flexDirection:'row',marginTop:10,}}>
        <Text style={{color:'#372854'}}>100</Text>
        <Text style={{color:'#372854'}}>.00SAR</Text>
        <View style={styles.next}>
            <Text style={{color:'#FFFFFF'}}>Start</Text>
        </View>
        
      </View>
    </View>
  </View>
{/*last icons with names */}
     <View style={styles.end}>
        <View style={{flexDirection:'column',marginLeft:15}}>
        <Feather name="home" size={30} color={'#3E168D'} />
        <Text style={{fontSize:10 ,color:'#3E168D'}}>Home</Text>
        </View>
        <View style={{flexDirection:'column'}}>
        <Feather name="shopping-cart" size={30} color={'#3E168D'}/>
        <Text style={{fontSize:10 ,color:'#3E168D'}}>Grocery</Text>
        </View>
        <View style={{flexDirection:'column',marginRight:15}}>
        <Ionicons name="person-outline" size={30} color={'#3E168D'} />
        <Text style={{fontSize:10 ,color:'#3E168D'}}>Profile</Text>
         </View>
     </View>
  </SafeAreaView>
  );
};







const styles = StyleSheet.create({
    headerstyle:{
    
    borderRadius: 10,
    //borderWidth:1,
    paddingHorizontal: 30,
    marginTop: 60,
    flexDirection: "row",
    marginRight: 20,
    borderColor: "#9884BE",
    backgroundColor: "#FFFFFF",
    shadowColor: "#9884BE",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 2,
    textShadowRadius: 10,
    elevation: 5,
    },
    next:{

       // marginHorizontal:60,
        //marginLeft: 90,
        backgroundColor: "#6B3EC6",
        borderRadius: 5,
        height: 40,
        //flexDirection: "row",
        width: 80,
        marginRight:30,
        shadowColor: "#000000",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 2,
        textShadowRadius: 10,
        elevation: 5,
        justifyContent: "center",
        alignItems: "center",
        
    },
    end:{
          flexDirection:'row',
          justifyContent:'space-between',
          marginTop:200,
          borderRadius:20,
         backgroundColor:'#FFFFFF',
         borderWidth:1,
         borderColor:'#CFC7DE',
       

    }






})
