import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/color";
import Input from "../components/Input";
import ConfirmNumber from "../components/ConfirmBox";
const startGameScreen = ({onStartGame}) => {
  const [enteredValue, setEneteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [enteredParseValue, setEnteredParseValue] = useState("");

  const numberInputHandler = inputText => {
    setEneteredValue(inputText.replace(/[^0-9]/g, ""));
  };
  const resetInputHandler = () => {
    setEneteredValue("");
    setConfirmed(false);
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number should be between 1 to 99 ", [
        { text: "Ok", style: "destructive", onPress: resetInputHandler }
      ]);
      return;
    }
    setEneteredValue("");
    setConfirmed(true);
    setEnteredParseValue(chosenNumber);
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card customStyle={styles.confirmStyle}>
        <Text >You Selected </Text>
        <ConfirmNumber >
            {enteredParseValue}
        </ConfirmNumber>
        <Button title="Start Game" onPress={()=>{onStartGame(enteredParseValue)}}/>
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        //clear keyboard when we tab somewhere on your screen
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start A New Game</Text>
        <Card customStyle={styles.container}>
          <Text>Select A Number</Text>
          <Input
            style={styles.input}
            placeholder="Enter"
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.button}>
            <View style={styles.buttonCustom}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.buttonCustom}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    // fontFamily:"openSansBold"
  },
  container: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  input: {
    width: 50,
    textAlign: "center"
  },
  button: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  buttonCustom: {
    width: 100
  },
  confirmStyle: {
    marginTop: 20,
    width: 150,
    alignItems: "center"
  },
 
});

export default startGameScreen;
