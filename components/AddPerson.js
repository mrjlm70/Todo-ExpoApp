import { StyleSheet, TextInput, View, Button } from "react-native";
import React from "react";

const AddPerson = ({ submitHandler, setPerson, person }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='فعالیت جدید...'
        placeholderTextColor='darkgrey'
        onChangeText={setPerson}
        value={person}
      />
      <Button
        onPress={submitHandler}
        title='اضافه کردن  '
        color='skyblue'
      />
    </View>
  );
};

export default AddPerson;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "skyblue",
    fontSize: 15,
  },
});
