import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Button from '../../components/Button.js';

export default function Login({navigation}) {
  return (
    <View >
      <Image></Image>
      <Text>Log in!</Text>
      <View>
        <TextInput 
          placeholder="Username" />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
        />
        <Button style title="Log in" onPress={() => {
            navigation.navigate('SwipingPage');
          }}></Button>
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
  buttonContainer: {
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  }
});
