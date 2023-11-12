import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import Button from '../../components/Button.js';


export default function MatchMsg({route}) {
    matchName = route?.params?.name ?? "Crab"
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/logo.png")} style={{width: 200, height: 200, resizeMode: 'contain'}} />
            <Text>Skuttle over to...</Text>
            <Text style={styles.title}>{matchName}</Text>
    
            <View style={styles.msgContainer}>
                <View style={styles.messages}>
                    <Veiw style={received}>
                        <Text>Heeey</Text>
                    </Veiw>
                </View>
                <View style={styles.formLine}>
                    <TextInput
                        value={msg}
                        onChangeText={setMsg}
                        placeholder="Type here" />
                    <Button title="Send" onPress={() => {
                        navigation.navigate('SignUp');
                    }}></Button>
                </View>
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
    msgContainer: {
      margin: 20,
      display: 'flex',
      flexDirection: 'row',
      gap: 20,
    },
    msgLine: {
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
        fontSize: 32
    },
    messages: {
        height: 500
    },
    received: {
        backgroundColor: '#eee'
    }
});
  