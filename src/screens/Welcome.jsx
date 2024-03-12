import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Button from '../components/UI/Button';
import { LinearGradient } from 'expo-linear-gradient';

const WelcomePage = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <LinearGradient colors={["#7DDF9D", "#17B7BD"]} style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: windowWidth * 0.05 }}>
        <Button title="D" style={{ marginRight: 258, fontWeight: 'bold',backgroundColor:'rgb(244,245,246)' ,color:'rgb(45,191,182)'}} />
        <Text style={{ fontSize: windowWidth * 0.08, color: 'white' }}>Welcome </Text>
        <Text style={{ fontSize: windowWidth * 0.035, color: 'white', marginTop: windowHeight * 0.02 }}>Easiest way</Text>
        <Text style={{ fontSize: windowWidth * 0.035, color: 'white' }}>Manage Your Money</Text>
        <Button
  title="Login"
  style={{ 
    marginTop: windowHeight * 0.05, 
    backgroundColor: 'rgb(244,245,246)' ,
    width: windowWidth * 0.9,
    color:'rgb(45,191,182)' 
  }}
/>

        <Button
          title="Register"
          style={{ marginTop: windowHeight * 0.02, width: windowWidth * 0.9, color: 'white' }}
        />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', marginTop: windowHeight * 0.01 }}>Terms Or Services</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default WelcomePage;
