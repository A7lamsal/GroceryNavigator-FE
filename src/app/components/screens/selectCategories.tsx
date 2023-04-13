import { View, Text,Image, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';



export default function SelectCategories() {
  
  return (
  <SafeAreaView>
    <View>
    <View style={styles.headerwarp}>
        <View style={styles.headerleft}>
      <Feather name="chevron-left"size={20}color={"#751AA0"}/>
      </View>
            <Text style={{fontSize:30}}>Categories</Text>
      <View style={styles.headerright}>
        <Feather name="shopping-cart"size={20} color={"#751AA0"} />
        </View>
        </View>
   </View>
   
        
       <View style={styles.headerstyle}>
       <Image  style={{height:70,width:70}}source={require('../../../assets/images/danube.png')}/>
       <View style={{flexDirection:'column',marginTop:10,marginLeft:20}}>
         <Text style={{fontStyle:'italic',fontSize:20}}> Danube</Text>
         <Text style={{fontSize:12,color:'#8D8D8D'}}>SA, Jeddah  thaley branch</Text>
         </View>
        </View>
        


        <View style={styles.searchcomponent}>
          <View style={styles.search}>
            <Text style={styles.searchText}>Search</Text>
          </View>
          <Feather name ="search" size={16} color={"#9884BE"}/>
        </View>
        <View style={styles.categorisWarp}>
          <Text style={styles.cateogiesTitle}>Categories</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <View style={styles.firstImage}>
            <Image style={{width:100,height:100}} source={require("../../../assets/images/Rectangle8.png")}/>
            <Text>Beverages</Text>
          </View>
          <View style={styles.secondImage}>
          <Image style={{width:100,height:100}} source={require("../../../assets/images/Rectangle10.png")}/>
          <Text>Products</Text>

          </View>
            
        </View>
        <View style={styles.secondImages}>

        <Image style={{width:100,height:100}} source={require("../../../assets/images/Rectangle12.png")}/>
        <Image style={{width:100,height:100}} source={require("../../../assets/images/Rectangle14.png")}/>
        </View>

        <View style={styles.add}>
                       <Text style={styles.addcart}>Continue to Cart</Text>
             </View>       
                       
                  
        
   </SafeAreaView>
   
  );
};

const styles=StyleSheet.create({

   contener:{

   
      flex:1,
        
        
     },
  
      headerwarp:{
  
        flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
        paddingHorizontal:15,
       paddingTop:20,
        
    
      },
  
      headerleft:{
        borderColor:'#E6D9FF',
        borderWidth:2,
        padding:20,
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center'
      },
      
      headerright:{
        borderColor:'#E6D9FF',
        borderWidth:2,
        padding:20,
        borderRadius:10,
       justifyContent:'center',
      },
      title:{
          fontSize:32,
      },
      headerstyle:{
        borderRadius:10,
         //borderWidth:1,
         paddingHorizontal:30,
         marginTop:90,
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
      searchcomponent:{
              
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        marginTop:30,
        //borderRadius:
         borderWidth:1,
         height:50,
         marginRight:20,
         borderBottomWidth:1,
         borderColor:'#9884BE'
         
      },
      search:{
           flex:1,
           marginLeft:90,
           
      },
      searchText:{
      
         color:'#9884BE',
      },
      categorisWarp:{
        marginTop:50
      },
      cateogiesTitle:{

         fontSize:25,
      },
      firstImage:{
        
        marginTop:30,
        marginRight:30,
      

      },
      secondImage:{
        marginTop:30
      },
      secondImages:{
        marginTop:30,
        marginRight:30,
       flexDirection:'row',
       justifyContent:'space-around'
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
    },
  
})
