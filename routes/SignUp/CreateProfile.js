import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import Button from '../../components/Button.js';
import SelectDropdown from 'react-native-select-dropdown'
import Slider from '@react-native-community/slider'

export default function CreateProfile() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [species, setSpecies] = useState('');
    const [age, setAge] = useState('');
    const [ocean, setOcean] = useState('');
    const [bio, setBio] = useState('');

    return (
        <View style={styles.container}>
            <Image source={require("../../assets/logo.png")} style={{width: 200, height: 200}} />
            <Text style={styles.title}>Create Profile</Text>

            <View style={styles.form}>
                <View style={styles.formRow}>
                    <Text>Name: </Text>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        placeholder="name" />
                </View>
                <View style={styles.formRow}>
                    <Text>Gender: </Text>
                    <View style={styles.sliderBox}>
                        <Text>Male</Text>
                        <Slider
                            style={styles.slider}
                            value={gender}
                            onValueChange={setGender} />
                        <Text>Female</Text>
                    </View>
                </View>
                <View style={styles.formRow}>
                    <Text>Species: </Text>
                    <TextInput
                        value={species}
                        onChangeText={setSpecies}
                        placeholder="species" />
                </View>
                <View style={styles.formRow}>
                    <Text>Age: </Text>
                    <TextInput
                        value={age}
                        onChangeText={setAge}
                        placeholder="age" />
                </View>
                <View style={[styles.formRow, styles.dropdown]}>
                    <Text>Ocean: </Text>
                    <SelectDropdown
                        data={["Atlantic", "Arctic", "Indian", "Pacific", "Southern"]}
                        value={ocean}
                        onSelect={setOcean} />
                </View>
                <View style={styles.formRow}>
                    <Text>Bio: </Text>
                    <TextInput
                        value={bio}
                        onChangeText={setBio}
                        placeholder="bio" />
                </View>
                <Button style title="Submit"></Button>
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
        fontSize: 32
    },
    TextInput: {
        width: 100,
        maxHeight: 10
    },
    dropdown: {
        maxWidth: 500,
        maxHeight: 50
    },
    slider: {
        minWidth: 100,
    },
    sliderBox: {
        display: 'flex',
        flexDirection: 'row',
    }
});