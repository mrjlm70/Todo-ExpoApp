import {
  Alert,
  FlatList,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import Header from "./components/Header";
import Persons from "./components/Persons";
import AddPerson from "./components/AddPerson";

export default function App() {
  const [persons, setPersons] = useState([
   
  ]);

  const [person, setPerson] = useState("");

  const pressHandler = (key) => {
    setPersons((prevPersons) => prevPersons.filter((p) => p.key != key));
  };

  const completeHandler = (key) => {
    const allPersons = [...persons];
    const personIndex = allPersons.findIndex((p) => p.key == key);
    const person = allPersons[personIndex];
    person.completed = true;
    allPersons[personIndex] = person;

    setPerson(allPersons);
  };

  const submitHandler = () => {
    if (person.length > 3) {
      setPersons((prevPersons) => [
        ...prevPersons,
        {
          name: person,
          key: Math.floor(Math.random() * 1000).toString(),
          completed: false,
        },
      ]);
      setPerson("");
      Keyboard.dismiss();
    } else {
      Alert.alert("too short");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/*Header*/}
        <Header />
        <View style={styles.body}>
          {/*Add Person*/}
          <AddPerson
            submitHandler={submitHandler}
            setPerson={setPerson}
            person={person}
          />
          <View style={styles.items}>
            <FlatList
              data={persons}
              renderItem={({ item }) => (
                <Persons person={item} pressHandler={pressHandler} completedHandler={completeHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2e2e2",
  },
  body: {
    flex: 1,
    padding: 40,
  },
  items: {
    flex: 1,
    marginTop: 20,
    // backgroundColor:'red',
  },
});
