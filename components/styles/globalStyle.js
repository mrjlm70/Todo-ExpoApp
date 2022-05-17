import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

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
      fontFamily: 'yekan',
      textAlign: "center",
      fontSize: 17,
      // fontWeight: "bold",
    },

    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "skyblue",
        fontSize: 15,
      },

      header:{
        height:90,
        paddingTop:40,
        backgroundColor:'skyblue',
    },

    title:{
        fontFamily: 'yekan',
        textAlign:'center',
        color:'white',
        fontSize:25,
        // fontWeight:'bold',
    },

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