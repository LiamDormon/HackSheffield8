import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>

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
        gap: 20
    },
    formRow: {
            margin: 20,
            display: 'flex',
            flexDirection: 'row',
            gap: 20
    }
  });