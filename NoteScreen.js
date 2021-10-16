import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import ListScreen from "./pages/ListScreen";
import AddPlantScreen from "./pages/AddPlantScreen";
import DetailPlantScreen from "./pages/DetailPlantScreen";
const NoteScreen = () => {
  return (
    <NavigationContainer independent="true">
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="DetailPlantScreen" component={DetailPlantScreen} />
        <Stack.Screen name="AddPlantScreen" component={AddPlantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NoteScreen;
