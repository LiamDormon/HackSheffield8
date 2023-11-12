import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./routes/Home/Home.js";
import Login from "./routes/Login/Login.js";
import SignUp from './routes/SignUp/SignUp.js';
import CreateProfile from './routes/SignUp/CreateProfile.js';
import SwipingPage from './routes/SwipingPage/SwipingPage.js';
import MatchMsg from './routes/SwipingPage/MatchMsg.js';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} options={{title:"Create an Account"}} />
        <Stack.Screen name="CreateProfile" component={CreateProfile} options={{title: "Create your profile"}} />
        <Stack.Screen name="SwipingPage" component={SwipingPage} options={{headerShown: false}} />
        <Stack.Screen name="MatchMsg" component={MatchMsg} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

