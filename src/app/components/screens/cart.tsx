import { View, Text,SafeAreaView,StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { color } from 'react-native-elements/dist/helpers';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Cart() {
   

  return (
    <View style={styles.contener}>
    <SafeAreaView>
    <View style={styles.header} >
        <View style={styles.headerIcon}>
        <Feather name="chevron-left"size={20}color={"#751AA0"}/>
        </View>
        <View style={styles.headerTitle}>
      <Text style={{fontSize:30}}>cart</Text>
      </View>
    </View>

      
    <View style={styles.headerstyle}>
       <Image  style={{height:70,width:70}}source={require('../../../assets/images/danube.png')}/>
       <View style={{flexDirection:'column',marginTop:10,marginLeft:20}}>
         <Text style={{fontStyle:'italic',fontSize:20}}> Danube</Text>
         <Text style={{fontSize:12,color:'#8D8D8D'}}>SA, Jeddah  thaley branch</Text>
         </View>
        </View>


          <View style={styles.pickup}>
            <Text style={{marginTop:10,color:'#9884BE'}}>Pickup date</Text>
          </View>

          <View>
             <Text style={{color:'#372854' ,fontSize:20,marginTop:50,marginLeft:50}}>Total</Text>

            <View style={{flexDirection:'row',marginHorizontal:50}}>
              <Text style={{color:'#372854' ,fontSize:30,}}>100</Text>
              < View style={{alignSelf:'center'}}>
              <Text style={{color:'#372854' ,fontSize:15,marginTop:20}}>.50 SR</Text>
              </View>
                   
            <TouchableOpacity onPress={() => alert('We received you Order')}>
              <View style={styles.order}>
                <Text style={{color:'#FFFFFF'}}>order</Text>
                </View>
                </View>
                </TouchableOpacity>

          
    </SafeAreaView>
    </View>
  );
};



const styles=StyleSheet.create({

    contener:{
         flex:1,
         marginTop:50
    },
    header:{
      flexDirection:'row',
      
    },
    headerIcon:{
        borderColor:'#E6D9FF',
        borderWidth:2,
        padding:12,
        borderRadius:10,
        marginLeft:20
    },
    headerTitle:{
        alignItems:'center',
        marginLeft:90,
        marginTop:15,  
        
    },
    headerstyle:{
        borderRadius:10,
         //borderWidth:1,
         paddingHorizontal:30,
         marginTop:50,
         flexDirection:'row',
         marginRight:20,
         borderColor:'#9884BE',
         backgroundColor:'#FFFFFF',
         shadowColor:'#9884BE',
       shadowOffset:{width:3,height:3},
       shadowOpacity:2,
       textShadowRadius:10,
       elevation:5,
      },

      pickup:{
       borderRadius:7,
        //borderWidth:2,
        paddingHorizontal:30,
        marginTop:50,
        flexDirection:'row',
        marginRight:20,
        borderColor:'#9884BE',
        backgroundColor:'#FFFFFF',
        shadowColor:'#9884BE',
        height:50,
      shadowOffset:{width:3,height:3},
      shadowOpacity:2,
      textShadowRadius:10,
      elevation:5,

      },
      order:{
        //marginTop:,
        marginHorizontal:90,
        marginRight:90,
        backgroundColor:'#6B3EC6',
       borderRadius:7,
       height:40,
       flexDirection:'row',
       width:150,

       shadowColor:'#000000',
       shadowOffset:{width:3,height:3},
       shadowOpacity:2,
       textShadowRadius:10,
      elevation:5,
      
       justifyContent:'center',
       alignItems:'center'
      },
})
