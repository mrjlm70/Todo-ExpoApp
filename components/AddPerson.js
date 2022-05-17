import { TextInput, View, Button } from "react-native";
import React from "react";
import { styles } from "./styles/globalStyle";

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
