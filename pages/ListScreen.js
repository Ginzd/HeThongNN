import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  FlatList,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import DetailPlantScreen from "./DetailPlantScreen";
import AddPlantScreen from "./AddPlantScreen";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const list = [
  {
    id: 1,
    image: "https://img.icons8.com/doodle/2x/plant-under-sun.png",
    name: "Cay Ca Chua 1",
    comment: "Thiet bi 1",
  },
  {
    id: 2,
    image: "https://img.icons8.com/doodle/2x/plant-under-sun.png",
    name: "Cay Ca Chua 2",
    comment: "Thiet bi 2",
  },
  {
    id: 3,
    image: "https://img.icons8.com/doodle/2x/plant-under-sun.png",
    name: "Cay Ca Chua 3",
    comment: "Thiet bi 3",
  },
];

const ListScreen = () => {
  
  const navigation = useNavigation();
  return (
    
    <View style={styles.screen}>

 
    <FlatList
      style={styles.root}
      data={list}
      extraData={list}
      ItemSeparatorComponent={() => {
        return <View style={styles.separator} />;
      }}
      keyExtractor={(item) => {
        return item.id;
      }}
      renderItem={(item) => {
        const Notification = item.item;
        return (
          
          <TouchableOpacity onPress={() => navigation.navigate(DetailPlantScreen)}>
          <View style={styles.container}>
        
              <Image
                style={styles.image}
                source={{ uri: Notification.image }}
              />
    
            <View style={styles.content}>
              <View style={styles.contentHeader}>
                <Text style={styles.name}>{Notification.name}</Text>
                <Text style={styles.time}>DATE TIME</Text>
              </View>
              <Text rkType="primary3 mediumLine">{Notification.comment}</Text>
            </View>
              
          </View>
        
       </TouchableOpacity>
       
        );
      }}
      
    />
    <TouchableOpacity onPress={() => navigation.navigate(AddPlantScreen)}
    style={{
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.2)',
      alignItems: 'center',
      justifyContent: 'center',
      width: 70,
      position: 'absolute',
      bottom: 10,
      right: 10,
      height: 70,
      backgroundColor: '#fff',
      borderRadius: 100,
    }}
  >
    <FontAwesome5 name='plus' size={30} color='#01a699' />
  </TouchableOpacity>
    </View>
    
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  screen: {
    height: 600,
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC",
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20,
  },
  time: {
    fontSize: 11,
    color: "#808080",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
