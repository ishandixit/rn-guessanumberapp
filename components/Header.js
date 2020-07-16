import React from "react";
import { View, Text,StyleSheet } from "react-native";
import Colors from '../constants/color';
const header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center"
  },
  title:{
      paddingTop:30
  }
});

export default header;
