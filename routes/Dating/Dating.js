
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';



export default function Dating() {

    const pinchGesture = Gesture.Pinch()
      .onUpdate((e) => {
        console.log(e.scale)
      })
      .onEnd((e) => {
        console.log("End");
      })
    // evalue > 1 ? SetMate(Mate + 1) && setEvalue(1) : setEvalue(1);

  return (
    <>
        <GestureHandlerRootView style={styles.container}>
          <GestureDetector gesture={pinchGesture}>
            <Animated.View style={styles.box}/>
          </GestureDetector>
        </GestureHandlerRootView>

        <View style={styles.footcontainer}>
            <Text style={styles.title}>Placeholder, [Age]</Text>
            <Text>Placeholder Bio</Text>
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