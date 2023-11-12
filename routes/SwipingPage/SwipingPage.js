import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
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

const profiles = require('../../profiles.json');

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

  function getRandomProfile() {
    const randomProfile = profiles[Math.floor(Math.random() * profiles.length)];
    setName(randomProfile.name);
    setAge(randomProfile.age);
    setGender(randomProfile.gender)
    setSpecies(randomProfile.species)
    setLocation(randomProfile.ocean)
    setBio(randomProfile.bio)
  }

  useEffect(() => {
    getRandomProfile();
  }, []); 

  return (
    <ImageBackground source={getImage()} style={styles.container}>
      <Text style={styles.title}>{name}, {age}</Text>
      <Text>{species}, {location}</Text>
      <Text>{bio}</Text>
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
    padding: 40,
    paddingTop: 100,
  },
  title: {
    fontSize: 48,
    color: "red"
  }
});

