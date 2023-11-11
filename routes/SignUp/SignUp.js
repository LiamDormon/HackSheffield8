import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import Button from '../../components/Button.js';

export default function SignUp({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Image source={require("../../assets/logo.png")} style={{width: 200, height: 200}} />
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
                <Button style title="Next" onPress={() => {
              navigation.navigate('CreateProfile');
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