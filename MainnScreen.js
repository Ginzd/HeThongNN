import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewsScreen from './pages/NewsScreen';
import DeviceScreen from './pages/DeviceScreen';
import NoteScreen from './NoteScreen';
import ExampleScreen from './pages/ExampleScreen';


const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Note List"
      activeColor="#b9b5da"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Note List"
        component={NoteScreen}
        options={{
          tabBarLabel: 'Nhật kí',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="note-text-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarLabel: 'Tin',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="new-box" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Device"
        component={DeviceScreen}
        options={{
          tabBarLabel: 'Thiết bị',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="devices" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Ghi chu"
        component={ExampleScreen}
        options={{
          tabBarLabel: 'Ghi chú',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-list" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default function MainnScreen() {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}


