import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Button from '../../components/Button.js';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View >
      <Image></Image>
      <Text > Log in! </Text>
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
        <Button style title="Log in" onPress={() => {
          const localUser = store.get("@localuser")
          if (localUser.username === username && localUser.password === password) {
            navigation.navigate('Home');
          } else {
            alert("Incorrect username or password")
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
