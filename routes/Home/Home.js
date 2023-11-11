import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button.js';

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>You've Got Crabs!</Text>
          <Text> Ending crustacean frustration </Text>
    
          <View style={styles.buttonContainer}>
            <Button style={{button: {backgroundColor: "black"}}} title="Login" onPress={() => {
              navigation.navigate('Login');
            }}></Button>
            <Button title="Sign Up" onPress={() => {
              navigation.navigate('SignUp');
            }}></Button>
          </View>
    
          <StatusBar style="auto" />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center', 
      justifyContent: 'center',
    },
    title: {
      fontSize: 48,
      color: "red"
    },
    buttonContainer: {
      margin: 20,
      display: 'flex',
      flexDirection: 'row',
      gap: 20,
    }
  });
  