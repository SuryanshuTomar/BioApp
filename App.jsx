import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import AboutMeScreen from './screens/AboutMe';
import BloodGroupScreen from './screens/BloodGroup';
import ResumeScreen from './screens/Resume';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bio">
        <Stack.Screen name="Bio" component={HomeScreen} />
        <Stack.Screen name="About Me" component={AboutMeScreen} />
        <Stack.Screen name="Blood Group" component={BloodGroupScreen} />
        <Stack.Screen name="Resume" component={ResumeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
