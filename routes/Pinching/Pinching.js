import { StyleSheet } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

export default function App() {
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);
  console.log("The pinching has started");

  const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = savedScale.value * e.scale;
      // console.log("scale value: " + scale.value)
      console.log("The e scale:" + e.scale)
    })
    .onEnd(() => {
      savedScale.value = scale.value;
      console.log("End value: " + scale.value)
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={pinchGesture}>
      <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginBottom: 30,
  },
});