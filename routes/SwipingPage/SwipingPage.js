import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  runOnJS,
  runOnUI
} from 'react-native-reanimated';

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

export default function SwipingPage({navigation}) {
  const [name, setName] = useState("Eugene Krabs");
  const [age, setAge] = useState(15);
  const [gender, setGender] = useState("Male")
  const [species, setSpecies] = useState("Blue Crabs")
  const [location, setLocation] = useState("United Kingdom")
  const [bio, setBio] = useState("...")
  const [image, setImage] = useState(images[0])

  const pinchGesture = Gesture.Pinch()
  .onEnd((e) => {
    let evalue = e.scale
    if (evalue < 1) {
      let random = Math.random()
      if (random > 0.8) {
        runOnJS(alert)("You have a new mate!")
      }
      runOnJS(navigation.push)('SwipingPage')
    } else {
      runOnJS(navigation.push)('SwipingPage')
    }
  })
  
  function getImage() {
    setImage(images[Math.floor(Math.random() * images.length)]);
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
    getImage();
  }, []); 


  return (
    <>
        <GestureHandlerRootView style={styles.container}>
          <GestureDetector gesture={pinchGesture}>
            <Animated.View style={{height: "100%", width: "100%"}}>
              <ImageBackground source={image} style={styles.container}>
                <Text style={styles.title}>{name}, {age}</Text>
                <Text>{species}, {location}</Text>
                <Text>{bio}</Text>
              </ImageBackground>
            </Animated.View>
          </GestureDetector>
        </GestureHandlerRootView>


    </>

  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center', 
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 48,
    color: "red",
    marginTop: 100,
  },
  pinchContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
    bottom: 0
  },
  pinchBox: {
    height: 300,
    width: 400,
    backgroundColor: 'red', //Remove colour when you're finished.
  },
});

