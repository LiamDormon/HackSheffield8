import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Button from '../../components/Button.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={{width: 200, height: 200, resizeMode: 'contain'}} />
      <Text style={styles.title}>Log in!</Text>

      <View style={styles.form}>
        <View style={styles.formRow}>
          <Text>Username: </Text>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Username" />
        </View>
        <View style={styles.formRow}>
          <Text>Password: </Text>
          <TextInput
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            placeholder="Password" />
        </View>
        <Button style title="Log in" onPress={async () => {
          const user = await AsyncStorage.getItem('@localuser').then((user) => JSON.parse(user));
          if (user) {
            if (user.username === username && user.password === password) {
              alert('Logged in!');
              navigation.navigate('SwipingPage')
            } else {
              alert('Incorrect username or password.');
            }
          } else {
            alert('User not found');
          }
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
  form: {
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'left', 
    justifyContent: 'left',
},
formRow: {
    display: 'flex',
    flexDirection: 'row',
},
textInput: {
    backgroundColor: '#eee',
    width: 100
}
});
