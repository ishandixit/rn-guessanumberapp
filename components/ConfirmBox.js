import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../constants/color";

const ConfirmBox = ({customStyle,children}) => {
  return (
    <View style={{ ...styles.container,...customStyle }}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      borderWidth:2,
      borderRadius:4,
        borderColor:Color.primary,
        padding:20,
        alignItems:"center"
  },
  text:{
      fontSize:20,
      color:Color.primary
  }
});

export default ConfirmBox;
