import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';


function EditProfile() {
    
} 

export default function SwipingPage() {
  const [name, setName] = useState("Eugene Krabs");
  const [age, setAge] = useState(15);
  const [gender, setGender] = useState("Male")
  const [species, setSpecies] = useState("Blue Crabs")
  const [location, setLocation] = useState("United Kingdom")
  const [bio, setBio] = useState("...")

  const [imageSource, setImageSource] = useState('');

  
  const generateRandomImage = () => { 
    const pics= Math.floor(Math.random() * 8).toString
    setImageSource("../../assets/ProfilePics/"+pics+".jpg")
  }
  generateRandomImage()

  return (
    <ImageBackground source={{ uri: imageSource }} style={styles.container}>
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

