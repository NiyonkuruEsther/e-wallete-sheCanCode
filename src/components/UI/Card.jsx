import React from 'react';
import { View, Text, StyleSheet, Platform } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { MoreOutlined } from '@ant-design/icons';
function Card() {
  return (
    <View style={styles.cardContainer}>
      <View style={[styles.rowContainer, styles.shadow]}>
      
        <View style={styles.column}>
          <Text style={styles.text}>Total Balance   <AntDesign
            name="up"
            size={15}
            color="black"
          /></Text>
          <Text style={styles.amount}>$203840</Text>

          <Text style={styles.text}><AntDesign
            name="arrowdown"
            size={15}
            color="black"
            style={{backgroundColor:'rgb(240,253,255)'}}
          />    Income</Text>
         
          <Text style={{color:'black',fontSize:20,fontWeight:500}}>$102350</Text>
        </View>

        
        <View style={styles.column}>
          <View style={styles.innerColumn}>
            <Text style={styles.icon}><AntDesign
              name="ellipsis1"
              size={30}
              color="black"
            /></Text>
            <Text style={styles.space}></Text>
            <Text style={styles.text}> <AntDesign
            name="arrowup"
            size={15}
            color="black"
            style={{backgroundColor:'rgb(240,253,255)'}}
          /> Expenses</Text>
            <Text style={{color:'black',fontSize:20,fontWeight:500}}>$97760</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    marginLeft: 10,
    position:'absolute',
    padding: 20,
    marginTop:160,
    marginLeft:35,
    borderRadius: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: 'white', 
    borderRadius: 10,
    position:'absolute',
    padding:30,
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
    color: 'black',
    fontWeight: '700',
    marginBottom: 5,
  },
  amount: {
    color: 'black',
    fontWeight: '800',
    fontSize: 20,
    marginBottom: 10,
  },
  icon: {
    alignItems: 'flex-end',
  },
  space: {
    height:30,
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

export default Card;
