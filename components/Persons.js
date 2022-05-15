import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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

const styles = StyleSheet.create({
  person:  {
    padding: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "skyblue",
    borderRadius: 20,
    borderStyle: "dashed",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  personName: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
});
