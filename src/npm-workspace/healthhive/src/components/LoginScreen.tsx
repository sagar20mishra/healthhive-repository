import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;
type PropsSignup = NativeStackScreenProps<RootStackParamList, 'SignUp'>;




const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [maskedPassword, setMaskedPassword] = useState('');

  const handlePasswordChange = (text: string) => {
    setPassword(text); // Store the actual password
    setMaskedPassword('*'.repeat(text.length)); // Mask the password with asterisks
  };

  const handleSignIn = () => {
    console.log('Sign-In clicked with :', { email, password });
    navigation.navigate('Home'); // navigate to Home screen

  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
      <Image
        source={require('./../../src/assets/images/healthHivelogo.png')} style={{ width: 450, height: 200 }}

      />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          value={maskedPassword}
          onChangeText={handlePasswordChange}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>
           Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
         </Text>
</TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  form: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#000', // Default text color
  },
  signUpLink: {
    color: '#28a745', // Green theme color
    fontWeight: 'bold',
  },
});
export default LoginScreen;