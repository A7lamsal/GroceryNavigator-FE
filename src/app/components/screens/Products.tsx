import { View, Text, SafeAreaView ,StyleSheet} from 'react-native'
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Products(props:any) {
    const categories : string [] =['All','Vegetables','Fruits'];
    const [categoryIndex,setCategoryIndex]: any =React.useState(2)
    const CategoriesList =()=>{
        return(
      <View style={styles.categorisContaner}>
         {categories.map((item ,index) =>(
            <Text key={index} style={[styles.categoriesText ,categoryIndex == index && styles.categoriesTextSlected , categoryIndex != index && styles.categoriesnotSelect ]}>{item}</Text>
            ))}
      </View>
        )
    };
  return (
    <View >
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
       justifyContent:'space-evenly',
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
        //marginHorizontal:90,
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
     paddingHorizontal:20
       

       
      
       //justifyContent:'center',
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
        
       
    }
    
})