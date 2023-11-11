import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Button from '../../components/Button.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View >
      <Text>Log in!</Text>
      <View>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Username" />
        <TextInput
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
        />
        <Button style title="Log in" onPress={async () => {
          const user = await AsyncStorage.getItem('@localuser');
          if (user) {
            if (user.username === username && user.password === password) {
              alert('Logged in!');
            } else {
              alert('Incorrect username or password.');
            }
          } else {
            alert('User not found');
          }
        }}></Button>
      </View>
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
