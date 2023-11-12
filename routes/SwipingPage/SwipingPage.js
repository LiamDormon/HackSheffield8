import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';


function EditProfile() {
    
} 

const images = [
  require("../../assets/ProfilePics/0.jpg"),
  require("../../assets/ProfilePics/1.jpg"),
  require("../../assets/ProfilePics/2.jpg"),
  require("../../assets/ProfilePics/3.jpg"),
  require("../../assets/ProfilePics/4.jpg"),
  require("../../assets/ProfilePics/5.jpg"),
  require("../../assets/ProfilePics/6.jpg"),
  require("../../assets/ProfilePics/7.jpg")
]

export default function SwipingPage() {
  const [name, setName] = useState("Eugene Krabs");
  const [age, setAge] = useState(15);
  const [gender, setGender] = useState("Male")
  const [species, setSpecies] = useState("Blue Crabs")
  const [location, setLocation] = useState("United Kingdom")
  const [bio, setBio] = useState("...")

  function getImage() {
    return images[Math.floor(Math.random() * images.length)];
  }

  return (
    <ImageBackground source={getImage()} style={styles.container}>
      <Text style={styles.title}>Placeholder</Text>
      <Text>Placeholder Bio</Text>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    width: null,
    height: null,
  },
  title: {
    fontSize: 48,
    color: "red"
  }
});

