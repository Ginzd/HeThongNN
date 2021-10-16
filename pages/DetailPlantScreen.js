import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DetailPlantScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("")}>
        <View style={styles.menuBox}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/external-wanicon-flat-wanicon/2x/external-coffee-plant-coffee-shop-wanicon-flat-wanicon.png",
            }}
          />
          <Text style={styles.info}>Nhật kí môi trường</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("")}>
        <View style={styles.menuBox}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/external-wanicon-flat-wanicon/2x/external-coffee-plant-coffee-shop-wanicon-flat-wanicon.png",
            }}
          />
          <Text style={styles.info}>Nhật kí sản xuất</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DetailPlantScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  menuBox: {
    backgroundColor: "#DCDCDC",
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    margin: 12,
  },
  icon: {
    width: 60,
    height: 60,
  },
  info: {
    fontSize: 22,
    color: "#696969",
  },
});
