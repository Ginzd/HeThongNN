import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import MainnScreen from './MainnScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{
                  title: "Home",
                         headerShown: false,
                }}/>
        <Stack.Screen name="Main" component={MainnScreen} options={{
                  title: "Main",
                  headerShown: false,
                }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
