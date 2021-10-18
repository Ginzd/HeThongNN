import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import DatePicker from "react-native-datepicker";
const AddPlantScreen = () => {
  const [text, onChangeText] = React.useState("Dia diem");
  const [number, onChangeNumber] = React.useState(null);
  const [date, setDate] = useState("09-10-2020");

  return (
    <View style={styles.dropdownn}>
      <Text style={styles.labelText}>Vị trí canh tác</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Dien tich"
        keyboardType="numeric"
      />
      <Text style={styles.labelText}>Mua vu</Text>
      <Text style={styles.simpleText}>Giong cay</Text>

      <RNPickerSelect
        placeholder={{ label: "Select plant", value: null }}
        onValueChange={(value) => console.log(value)}
        items={[
          { label: "CaChua", value: "cachua" },
          { label: "Baseball", value: "baseball" },
          { label: "Hockey", value: "hockey" },
        ]}
      />
      <Text style={styles.simpleText}>Ngay bat dau</Text>
      <DatePicker
        style={styles.datePickerStyle}
        date={date} // Initial date from state
        mode="date" // The enum of date, datetime and time
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="01-01-2016"
        maxDate="01-01-2019"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            //display: 'none',
            position: "absolute",
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
        }}
        onDateChange={(date) => {
          setDate(date);
        }}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="So luong trong"
        keyboardType="numeric"
      />

      <Text style={styles.simpleText}>Don vi tinh</Text>

      <RNPickerSelect
        placeholder={{ label: "Select ....", value: null }}
        onValueChange={(value) => console.log(value)}
        items={[
          { label: "klg", value: "klg" },
          { label: "hat", value: "hat" },
        ]}
      />
          <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Ghi chu"
        keyboardType="numeric"
      />
      <Button title="SAVE"/>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  labelText: {
    fontSize: 17,
    fontWeight: "bold",
    margin: 12,
  },
  simpleText: {
    fontSize: 15,
    margin: 12,
  },
  dropdownn: {
    margin: 12,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  scrollContentContainer: {
    paddingTop: 40,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});

export default AddPlantScreen;
