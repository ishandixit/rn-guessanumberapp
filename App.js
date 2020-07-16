import React, { useState } from "react";
import {
  StyleSheet,
  View
} from "react-native";
import * as Fonts from 'expo-font';
import {AppLoading} from 'expo';
import Header from "./components/Header";
import StartScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";

// const fetchFonts=()=>{
//   return Fonts.loadAsync({
//     'openSans':require('./assets/fonts/OpenSans-Regular.ttf'),
//     'openSansBold':require('./assets/fonts/OpenSans-Bold.ttf'),
//   })
// }

export default function App() {
  const [value,setValue]=useState('');
  const [rounds,setRounds]=useState(0);
  // const [dataLoaded,setDataLoaded]=useState(false);
  // if(!dataLoaded){
  //   <AppLoading startAsync={fetchFonts} onFinish={()=>setDataLoaded(true)} onError={(err)=>{console.log(err)}}/>
  // }
  const startGame=(enteredValue)=>{
    setValue(enteredValue);
    setRounds(0); //At very start of the game the rounds should set to zero(0)
  };
  const gameOverHandler=(returnRounds)=>{
    setRounds(returnRounds);
  };
  const newgameStart =()=>{
    setValue(null);
    setRounds(0);
  }
  let switchScreen=<StartScreen onStartGame={startGame}/>;
  if(value && rounds<=0){
    switchScreen=<GameScreen userChoice={value} onGameOver={gameOverHandler}/>
  }else if(rounds>0){
    switchScreen=<GameOver onNewStartGame={newgameStart} userChoice={value} rounds={rounds}/>
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {switchScreen}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems:"center"
  }
});
