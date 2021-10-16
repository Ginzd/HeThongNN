import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const MyPickerSelect = () => {

   return (
      <View style={styles.lineContainer}>
         <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
            { label: "CaChua", value: "cachua" },
            { label: "Baseball", value: "baseball" },
            { label: "Hockey", value: "hockey" },
          ]}
        />
      </View>
   );
}

export default MyPickerSelect

const styles = StyleSheet.create({
    label: {
       marginLeft: 10,
       marginRight: 15,
       fontSize: 18,
       width: 130,
    },
    lineContainer: {
       flexDirection: 'row',
       justifyContent: 'flex-start',
       alignItems: 'center',
       paddingHorizontal: 15,
       paddingTop: 6,
    },
 })
 