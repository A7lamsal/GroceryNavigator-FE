import { View, Text, SafeAreaView ,StyleSheet} from 'react-native'
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native-elements';

export default function Products(props:any) {
    const categories : string [] =['All','Vegetables','Fruits'];
    const [categoryIndex,setCategoryIndex]: any =React.useState(0)
    const CategoriesList =()=>{
        return(
      <View style={styles.categorisContaner}>
         {categories.map((item ,index) =>(
            <Text key={index} style={[styles.categoriesText ,categoryIndex == index && styles.categoriesTextSlected ,
               categoryIndex != index && styles.categoriesnotSelect ]}>{item}</Text>
            ))}
      </View>
        )
    };
  return (
    <View style={{flex:1}}>
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
            <CategoriesList/>
            <View style={styles.searchheder}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Found 86 Result</Text>
                <View style={styles.headerIcon}>
                    <Text>Sort by</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={18} color={'#751AA0'}/>
                </View>
            </View>

             <View style={{ flexDirection: "row", justifyContent:'space-around'}}>
             <View style={styles.Image}>
                <Image  style={{ width:40, height: 30,marginTop:12 }} source={require("../../../assets/images/Rectangle1.png")}/>
                <View style={{marginTop:7 , flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:9,fontWeight:'bold',marginRight:30}}>Tomato</Text>
                  <View style={{height:20,width:20,borderRadius:20 , backgroundColor:'#6B3EC6',alignItems:'center'}}>
                    <Text style={{color:'#FFFFFF',fontSize:14,fontWeight:'bold'}} >+</Text>
                  </View>
                  
                </View>
                <View style={{}}>
                <Text style={{fontSize:6,color:'#8D8D8D', alignSelf:'baseline',marginLeft:5,paddingEnd:10,marginTop:2}}>Lorem ipsum dolor sit amet consectetur.</Text>
              </View>
              </View>

              <View style={styles.Image}>
                <Image  style={{ width: 40, height: 30,marginTop:12 }} source={require("../../../assets/images/Rectangle2.png")}/>
                <View style={{marginTop:7 , flexDirection:'row',alignItems:'center'}}>
                <Text style={{marginRight:8,fontSize:7,fontWeight:'bold'}}>Yosef Effendi fruit</Text>
                  <View style={{height:20,width:20,borderRadius:20 , backgroundColor:'#6B3EC6',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#FFFFFF',fontSize:14,fontWeight:'bold'}} >+</Text>
                  </View>
                  
                </View>
                <View style={{}}>
                <Text style={{fontSize:6,color:'#8D8D8D', alignSelf:'baseline',marginLeft:5,paddingEnd:10,marginTop:2}}>Lorem ipsum dolor sit amet consectetur.</Text>
              </View>
              </View>
              <View style={styles.Image}>
                <Image  style={{ width: 40, height: 30,marginTop:12 }} source={require("../../../assets/images/Rectangle3.png")}/>
                <View style={{marginTop:7 , flexDirection:'row',alignItems:'center'}}>
                <Text style={{marginRight:10,fontSize:9,fontWeight:'bold'}}>Strawberry</Text>
                  <View style={{height:20,width:20,borderRadius:20 , backgroundColor:'#6B3EC6',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#FFFFFF',fontSize:14,fontWeight:'bold'}} >+</Text>
                  </View>
                  
                </View>
                <View style={{}}>
                <Text style={{fontSize:6,color:'#8D8D8D', alignSelf:'baseline',marginLeft:5,paddingEnd:10,marginTop:2}}>Lorem ipsum dolor sit amet consectetur.</Text>
              </View>
              </View>
              </View>




              <View style={{flexDirection:'row',justifyContent:'space-around'}}>

              <View style={{ flexDirection: "row", justifyContent:'space-between'}}>
              <View style={styles.Image}>
                <Image  style={{ width: 40, height: 30,marginTop:12 }} source={require("../../../assets/images/Rectangle4.png")}/>
                <View style={{marginTop:7 , flexDirection:'row',alignItems:'center'}}>
                <Text style={{marginRight:10,fontSize:9,fontWeight:'bold'}}>Watermelon</Text>
                  <View style={{height:20,width:20,borderRadius:20 , backgroundColor:'#6B3EC6',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#FFFFFF',fontSize:14,fontWeight:'bold'}} >+</Text>
                  </View>
                  
                </View>
                <View style={{}}>
                <Text style={{fontSize:6,color:'#8D8D8D', alignSelf:'baseline',marginLeft:5,paddingEnd:10,marginTop:2}}>Lorem ipsum dolor sit amet consectetur.</Text>
              </View>
              </View>
              <View style={styles.Image}>
                <Image  style={{ width: 40, height: 30,marginTop:12 }} source={require("../../../assets/images/Rectangle5.png")}/>
                <View style={{marginTop:7 , flexDirection:'row',alignItems:'center'}}>
                <Text style={{marginRight:30,fontSize:9,fontWeight:'bold'}}>Peach</Text>
                  <View style={{height:20,width:20,borderRadius:20 , backgroundColor:'#6B3EC6',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#FFFFFF',fontSize:14,fontWeight:'bold'}} >+</Text>
                  </View>
                  
                </View>
                <View style={{}}>
                <Text style={{fontSize:6,color:'#8D8D8D', alignSelf:'baseline',marginLeft:5,paddingEnd:10,marginTop:2}}>Lorem ipsum dolor sit amet consectetur.</Text>
              </View>
              </View>
              <View style={styles.Image}>
                <Image  style={{ width: 40, height: 30,marginTop:12 }} source={require("../../../assets/images/Rectangle6.png")}/>
                <View style={{marginTop:7 , flexDirection:'row',alignItems:'center'}}>
                <Text style={{marginRight:15,fontSize:9,fontWeight:'bold'}}>Pine Apple</Text>
                  <View style={{height:20,width:20,borderRadius:20 , backgroundColor:'#6B3EC6',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#FFFFFF',fontSize:14,fontWeight:'bold'}} >+</Text>
                  </View>
                  
                </View>
                <View style={{}}>
                <Text style={{fontSize:6,color:'#8D8D8D', alignSelf:'baseline',marginLeft:5,paddingEnd:10,marginTop:2}}>Lorem ipsum dolor sit amet consectetur.</Text>
              </View>
              </View>
              </View>


              </View>



              <View style={{flexDirection:'row',justifyContent:'space-around'}}>

              <View style={{ flexDirection: "row", justifyContent:'space-between'}}>
              <View style={styles.Image}>
                <Image  style={{ width: 30, height: 30,marginTop:12 }} source={require("../../../assets/images/Rectangle7.png")}/>
                <View style={{marginTop:7 , flexDirection:'row',alignItems:'center'}}>
                <Text style={{marginRight:9,fontSize:9,fontWeight:'bold'}}>Pomegranate</Text>
                  <View style={{height:20,width:20,borderRadius:20 , backgroundColor:'#6B3EC6',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#FFFFFF',fontSize:14,fontWeight:'bold'}} >+</Text>
                  </View>
                  
                </View>
                <View style={{}}>
                <Text style={{fontSize:6,color:'#8D8D8D', alignSelf:'baseline',marginLeft:5,paddingEnd:10,marginTop:2}}>Lorem ipsum dolor sit amet consectetur.</Text>
              </View>
              </View>
              <View style={styles.Image}>
                <Image  style={{ width: 40, height: 30,marginTop:12 }} source={require("../../../assets/images/Rectangle99.png")}/>
                <View style={{marginTop:7 , flexDirection:'row',alignItems:'center'}}>
                <Text style={{marginRight:15,fontSize:9,fontWeight:'bold'}}>Avacado</Text>
                  <View style={{height:20,width:20,borderRadius:20 , backgroundColor:'#6B3EC6',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#FFFFFF',fontSize:14,fontWeight:'bold'}} >+</Text>
                  </View>
                  
                </View>
                <View style={{}}>
                <Text style={{fontSize:6,color:'#8D8D8D', alignSelf:'baseline',marginLeft:5,paddingEnd:10,marginTop:2}}>Lorem ipsum dolor sit amet consectetur.</Text>
              </View>
              </View>
              <View style={styles.Image}>
                <Image  style={{ width: 40, height: 30,marginTop:12 }} source={require("../../../assets/images/Rectangle9.png")}/>
                <View style={{marginTop:7 , flexDirection:'row',alignItems:'center'}}>
                <Text style={{marginRight:30,fontSize:9,fontWeight:'bold'}}>Mongo</Text>
                  <View style={{height:20,width:20,borderRadius:20 , backgroundColor:'#6B3EC6',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#FFFFFF',fontSize:14,fontWeight:'bold'}} >+</Text>
                  </View>
                  
                </View>
                <View style={{}}>
                <Text style={{fontSize:6,color:'#8D8D8D', alignSelf:'baseline',marginLeft:5,paddingEnd:10,marginTop:2}}>Lorem ipsum dolor sit amet consectetur.</Text>
              </View>
              </View>
              </View>


              </View>
             
              
              <View >

          <View style={styles.Image}>
           <Image  style={{ width: 40, height: 30,marginTop:12 }} source={require("../../../assets/images/Rectangle999.png")}/>
         <View style={{ alignItems:'center' ,flexDirection:'row'}}>
          <Text style={{marginRight:15,fontSize:9,fontWeight:'bold'}}>Jalapeno</Text>
            <View style={{height:20,width:20,borderRadius:20 , backgroundColor:'#6B3EC6',justifyContent:'center',alignItems:'center'}}>
             <Text style={{color:'#FFFFFF',fontSize:14,fontWeight:'bold'}} >+</Text>
            </View>
    
             </View>
           <View style={{}}>
          <Text style={{fontSize:6,color:'#8D8D8D', alignSelf:'baseline',marginLeft:5,paddingEnd:10,marginTop:2}}>Lorem ipsum dolor sit amet consectetur.</Text>
          </View>
              </View>
              </View>
              
           
       
         

             
       
      </SafeAreaView>
    </View>
  );
};

const styles =StyleSheet.create({

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
    titel:{
      
        fontSize:32,

    },
    headerright:{
      
        borderColor:'#E6D9FF',
      borderWidth:2,
      padding:12,
      borderRadius:10,
    },
    categorisContaner:{
      
       flexDirection:'row',
       marginTop:70,
       marginBottom:20,
       //justifyContent:'space-between',
      alignItems:'center',
      marginRight:60,
    
      
     
      
      
      
    },
    categoriesText:{
       fontSize:16,
       color:'#372854',
       
     


    },
    categoriesTextSlected:{
        //color:'#6B3EC6',
        //paddingBottom:5,
      //  borderBottomWidth:2,
       //borderColor:'#6B3EC6',
        borderWidth:1,
        //borderRadius:5
        backgroundColor:'#6B3EC6',
        marginHorizontal:10,
       // backgroundColor:'#6B3EC6',
       //borderRadius:20,
       height:30,
       //width:90,
       color:'#FFFFFF',
       shadowColor:'#9884BE',
     shadowOffset:{width:3,height:3},
     shadowOpacity:2,
     textShadowRadius:10,
     elevation:5,
     
     borderBottomWidth:5,
     paddingHorizontal:20,
     
     
       

       
      
       //justifyContent:'space-between',
       //alignItems:'center'
        
    },
    searchheder:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:50
    },
    headerIcon:{
        flexDirection:'row',
        
    },
     
    categoriesnotSelect:{
       // backgroundColor:'#FDFCFF',
        //borderRadius:3,
        //borderColor:'#6B3EC6',
       // paddingBottom:5,
      borderBottomWidth:5,
      // borderStyle:'dashed',
       // borderWidth:1,
        height:30,
      // borderRadius:12,
       //borderWidth:1,
       paddingHorizontal:20,
       marginHorizontal:10,
      
       
      // marginTop:90,
       //flexDirection:'row',
      // marginRight:20,
      // borderColor:'#9884BE',
      //borderRadius:10,
       backgroundColor:'#FFFFFF',
       shadowColor:'#9884BE',
     shadowOffset:{width:3,height:3},
     shadowOpacity:2,
     textShadowRadius:10,
     elevation:5,
        
       
    },
    Image: {
      marginTop: 30,
      marginRight: 30,
      borderColor: "#9884BE",
      backgroundColor: "#FFFFFF",
      shadowColor: "#9884BE",
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity: 2,
      textShadowRadius: 10,
      elevation: 5,
      height: 100,
      borderRadius: 15,
      //justifyContent: "space-evenly",
      alignItems: "center",
      width: 100,
     
    },
    
})