
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const crabProfiles = require('../../profiles.json');


console.log(crabProfiles[1].name);
export default function Dating() {
    let evalue = 1;
    const [mate, setMate] = useState(0)
    const pinchGesture = Gesture.Pinch()
      .onUpdate((e) => {
        console.log(e.scale)
      })
      .onEnd((e) => {
        console.log("End");
        evalue = e.scale
        console.log("evalue: " + evalue)
        
      })
      // evalue > 1 ? setMate(mate + 1) : null;
      // console.log("You now have {mate} mates");

  return (
    <>
        <GestureHandlerRootView style={styles.container}>
          <GestureDetector gesture={pinchGesture}>
            <Animated.View style={styles.box}/>
          </GestureDetector>
        </GestureHandlerRootView>


        <View style={styles.footcontainer}>
            <Text style={styles.title}>{crabProfiles[0].name}, {crabProfiles[0].age}</Text>
            <Text>{crabProfiles[0].bio}</Text>
        <StatusBar style="auto" />
        </View>
    </>
    
  );
}




const styles = StyleSheet.create({
  box: {
    height: 300,
    width: 400,
    backgroundColor: '#b58df1', //Remove colour when you're finished.
  },
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  footcontainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'left',
    marginLeft: 20,
    marginBottom: 100,
  },
  title: {
    fontSize: 48,
    color: "red"
  },

});