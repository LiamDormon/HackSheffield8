import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./routes/Home/Home.js";
import Login from "./routes/Login/Login.js";
import SignUp from './routes/SignUp/SignUp.js';
import CreateProfile from './routes/SignUp/CreateProfile.js';
import SwipingPage from "./routes/SwipingPage/SwipingPage.js"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="CreateProfile" component={CreateProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

