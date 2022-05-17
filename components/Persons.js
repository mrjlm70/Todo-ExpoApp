import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles/globalStyle";

const Persons = ({ person, pressHandler, completedHandler }) => {
  return (
    <TouchableOpacity onPress={() => completedHandler(person.key)}>
      <View style={styles.person}>
        <Text style={[styles.personName, 
        person.completed ? {textDecorationLine: 'line-through'}:{}]}>
        {person.name}
        </Text>
        <MaterialCommunityIcons
          name='delete-circle-outline'
          size={24}
          color='skyblue'
          onPress={() => pressHandler(person.key)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Persons;