import React from 'react';
import { View, Text, StyleSheet, Platform } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

function Card() {
  return (
    <View style={styles.cardContainer}>
      <View style={[styles.rowContainer, styles.shadow]}>
      
        <View style={styles.column}>
          <Text style={styles.text}>Total Balance   <AntDesign
            name="up"
            size={15}
            color="white"
          /></Text>
          <Text style={styles.amount}>$203840</Text>

          <Text style={styles.text}> <AntDesign
            name="downcircleo"
            size={15}
            color="white"
          />    Income</Text>
          <Text style={{color:'white',fontWeight:800,fontSize:17}}>$102350</Text>
        </View>

        
        <View style={styles.column}>
          <View style={styles.innerColumn}>
            <Text style={styles.icon}><AntDesign
              name="dotchart"
              size={20}
              color="white"
            /></Text>
            <Text style={styles.space}></Text>
            <Text style={styles.text}>Expenses</Text>
            <Text style={{color:'white',fontWeight:800,fontSize:17}}>$97760</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 30,
    paddingLeft: 10,
    marginLeft: 0,
    padding: 10,
    borderRadius: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#17B7BD', 
    borderRadius: 10,
    overflow: 'hidden', 
  },
  column: {
    flex: 1,
    padding: 10,
  },
  innerColumn: {
    alignItems: 'flex-end',
  },
  text: {
    color: 'white',
    fontWeight: '700',
    marginBottom: 5,
  },
  amount: {
    color: 'white',
    fontWeight: '800',
    fontSize: 40,
    marginBottom: 10,
  },
  icon: {
    alignItems: 'flex-end',
  },
  space: {
    height: 70,
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

export default Card;
