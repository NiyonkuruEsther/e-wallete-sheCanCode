import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function Vizza() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
       <Text style={styles.cardHolder}> <Image
          source={require('../../../assets/images.png')} 
          style={styles.logo}
        />                                          Mono</Text>
        
        <Text style={styles.cardNumber}>1234       5678      9012      3456</Text>
        <Text style={styles.cardHolder}>John Doe</Text>
        <Text style={styles.cardExpiry}>Valid Thru 12/24</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  paddingLeft:40,
  paddingTop:40
   
  },
  card: {
    backgroundColor: '#17B7BD',
    padding: 20,
    borderRadius: 10,
    width: 300,
    height: 200,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    width:40,
    height: 40,
    resizeMode: 'contain',
  },
  cardNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'white'
  },
  cardHolder: {
    fontSize: 16,
    color:'white',
    fontWeight: '600',
  },
  cardExpiry: {
    fontSize: 14,
    color:'white'
  },
});

export default Vizza;
