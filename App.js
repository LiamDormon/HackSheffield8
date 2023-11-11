import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./routes/Home/Home.js";
import Login from "./routes/Login/Login.js";
import SwipingPage from "./routes/SwipingPage/SwipingPage.js"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false
        }} />
        <Stack.Screen name="SwipingPage" component={SwipingPage} options={{
          headerShown: false
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

