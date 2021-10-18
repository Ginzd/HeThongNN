import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import DatePicker from "react-native-datepicker";
const AddPlantScreen = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [date, setDate] = useState("09-10-2020");

  return (
    <View style={styles.dropdownn}>
      <Text style={styles.labelText}>Vị trí canh tác</Text>
      <View style={styles.rowContainer}>
        <Text style={styles.text}>Địa điểm</Text>
        <TextInput
          style={styles.textInput}
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.text}>Diện tích</Text>
        <TextInput
          style={styles.textInput}
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>

      <Text style={styles.labelText}>Mùa vụ</Text>

      <View style={styles.rowContainer}>
        <Text style={styles.simpleText}>Giống cây</Text>
        <View style={styles.rowContainerPicker}>
          <RNPickerSelect
            placeholder={{ label: "Lựa chọn cây", value: null }}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: "Cà chua", value: "cachua" },
              { label: "Cà pháo", value: "baseball" },
              { label: "Cà na", value: "hockey" },
            ]}
          />
        </View>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.simpleText}>Ngày bắt đầu</Text>
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
      </View>

      <View style={styles.rowContainer}>
        <Text style={styles.text}>Số lượng trồng</Text>
        <TextInput
          style={styles.textInput}
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
        />
      </View>

      <View style={styles.rowContainer}>
        <Text style={styles.simpleText}>Đơn vị tính</Text>
        <View style={styles.rowContainerPicker}>
          <RNPickerSelect
            placeholder={{ label: "Select ....", value: null }}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: "klg", value: "klg" },
              { label: "hat", value: "hat" },
            ]}
          />
        </View>
      </View>

      <View style={styles.rowContainer}>
        <Text style={styles.text}>Ghi chú</Text>
        <TextInput
          style={styles.input}
          multiline={true}
          numberOfLines={3}
          placeholder="Ghi chú"
        />
      </View>

      <Button title="Lưu" />
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: "row",

    alignItems: "center",
  },
  rowContainerPicker: {
    width: 375,
    paddingLeft: 25,
  },
  text: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 12,
  },
  textInput: {
    flex: 1,
    backgroundColor: "white",
    borderColor: "black",
  },
  input: {
    height: 30,
    width: 350,
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
