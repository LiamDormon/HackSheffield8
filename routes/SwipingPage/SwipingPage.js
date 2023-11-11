import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


function EditProfile() {
    
} 

export default function SwipingPage() {

const [name, setName] = useState("Eugene Krabs");
const [age, setAge] = useState(15);
const [gender, setGender] = useState("Male")
const [species, setSpecies] = useState("Blue Crabs")
const [location, setLocation] = useState("United Kingdom")
const [bio, setBio] = useState("...")


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Placeholder</Text>
      <Text>Placeholder Bio</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
  },
  title: {
    fontSize: 48,
    color: "red"
  }
});

