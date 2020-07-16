import React, { useState,useRef,useEffect } from "react";
import { View, Text, Button, StyleSheet,Alert } from "react-native";
import NumberContainer from "../components/ConfirmBox";
import Card from "../components/Card";

const generateRandom = (min, max, exclude) => {
   min = Math.ceil(min);
   max = Math.floor(max);
  const rndmNum = Math.floor(Math.random() * (max - min) + min);
  if (rndmNum === exclude) {
    return generateRandom(min, max, exclude);
  } else {
    return rndmNum;
  }
};

const GameScreen = ({ userChoice,onGameOver }) => {
  const [rndmNumber, setRndmNumber] = useState(
    generateRandom(1, 100, userChoice)
  );
  const [roundsCheck,setRoundsCheck]=useState(0);
  const currentHigh=useRef(100);
  const currentLow=useRef(1);
  useEffect(()=>{
      if(userChoice===rndmNumber){
        onGameOver(roundsCheck)
      }
  },[rndmNumber])
  const generateAgain=(direction)=>{
    if((direction==="Lower" && userChoice>rndmNumber)||(direction==="Greater" && userChoice<rndmNumber)){
        Alert.alert("Don't Lie Mate","You are wrong",[{text:"Ok",style:"cancel"}])
        return;
    }
    if(direction==="Lower"){
        currentHigh.current=rndmNumber
    }else{
        currentLow.current=rndmNumber
    };
    setRndmNumber(generateRandom(currentLow.current,currentHigh.current,rndmNumber));
    setRoundsCheck(r=>r+1)
  }
  return (
    <View style={styles.container}>
      <Text >Opponent's Guess</Text>
      <NumberContainer customStyle={styles.Number}>{rndmNumber}</NumberContainer>
      <Card customStyle={styles.buttonCard}>
        <Button title="Lower" onPress={generateAgain.bind(this,"Lower")}/>
        <Button title="Greater" onPress={generateAgain.bind(this,"Greater")}/>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        alignItems:"center"
    },
    buttonCard:{
        flexDirection:"row",
        maxWidth:"80%",
        justifyContent:"space-between",
        paddingHorizontal:20
    },
    Number:{
        marginVertical:10
    }
});
export default GameScreen;
