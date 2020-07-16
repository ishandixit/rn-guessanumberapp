import React from "react";
import { View, StyleSheet } from "react-native";

const Card = ({customStyle,children}) => (
  <View style={{ ...styles.card, ...customStyle }}>{children}</View>
);
const styles = StyleSheet.create({
  card: {
    shadowColor: "blue",
    shadowOffset: {
      width: 5,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  }
});
export default Card;
