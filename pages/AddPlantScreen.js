import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import DatePicker from "react-native-datepicker";
const AddPlantScreen = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [date, setDate] = useState("09-10-2020");

  return (
    <View  style={styles.viewstyle} behavior="padding">
      <Text style={styles.labelText}>Vị trí canh tác</Text>
      <View style={styles.rowContainer}>
        <Text style={styles.text}>Địa điểm</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="..."
        />
      </View>

      <View style={styles.rowContainer}>
        <Text style={styles.text}>Diện tích</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="..."
        />
      </View>
      <Text style={styles.labelText}>Mùa vụ</Text>

      <View style={styles.rowContainer}>
        <Text style={styles.text}>Giống cây</Text>
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
        <Text style={styles.text}>Ngày bắt đầu</Text>
        <DatePicker
          style={styles.datePickerStyle}
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2055"
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
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="..."
        />
      </View>

      <View style={styles.rowContainer}>
        <Text style={styles.text}>Đơn vị tính</Text>
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
          numberOfLines={2}
          placeholder="..."
        />
      </View>

      <Button title="Lưu" />
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  rowContainerPicker: {
    width: 200,
    paddingLeft: 25,
  },
  text: {
    flex: 1,
    paddingTop: 12,
  },
  input: {
    flex: 2,
    borderColor: "black",
    borderWidth: 1,
  },
  labelText: {
    fontSize: 17,
    fontWeight: "bold",
    paddingBottom: 20,
  },
  viewstyle: {
    margin: 12,
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
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
