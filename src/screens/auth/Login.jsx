import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import InputLabel from '../../components/UI/InputLabel';
import { GradientHeader } from '../../components/typography';
import Button from '../../components/UI/Button';
import { firebaseConfig } from '../../../FirebaseConfig';

const auth = getAuth(firebaseConfig);

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true); 
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('User logged in:', userCredential.user.uid);
    } catch (error) {
      console.error('Login error:', error.message);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <>
      <View style={{ paddingLeft: 15 }}>
        <MaterialCommunityIcons name='arrow-left' style={{ paddingTop: Platform.OS === "android" && 50 }} size={25} color={"#black"} />
        <View style={{ height: 70 }}></View>
        <GradientHeader text={"Hello"} />
        <Text>Login First To Continue</Text>

        <View style={{ height: 50 }}></View>
        <InputLabel label={'email'} onChangeText={setEmail} />
        <InputLabel secureTextEntry={true} label={'password'} onChangeText={setPassword} />

        <TouchableOpacity onPress={() => navigation.navigate('Forgot')} style={{ marginBottom: 60, marginTop: 15, display: 'flex', alignItems: 'flex-end', paddingRight: 20 }}>
          <Text style={{color:'grey'}}>Forget Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingRight: 10, marginLeft: 10 }}>
        <Button title="Login" backgroundStyle={"gradient"} onPress={handleLogin} />
      </View>
    </>
  );
}

export default Login;
