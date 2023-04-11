//import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

export default function Categorise(props:any) {
    return (
        <View style={styles.contener}>
            <View style={styles.headerleft}>
                <Image source={require('../../../assets/images/Vector.png')}/>
            </View>
            <Text>Products</Text>
            <View style={styles.headerright}>
              <Image source={require('../../../assets/images/shoppingcart.png')}/>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({

   contener:{

   },
   headerleft:{


   },
   headerright:{


   },


})




