import React from 'react';
import {View,Text,StyleSheet,Button,Image} from "react-native";

const GameOver=({
    userChoice,
    rounds,
    onNewStartGame
})=>{
    return<View style={styles.container}>
        <Text>You won</Text>
        <Image source={require("../assets/success.png")} style={styles.image}/>
        <Text>Number you entered is {userChoice}</Text>
        <Text>Rounds occured {rounds}</Text>
        <Text>Game is over!!</Text>
        <Button title="Start New Game" onPress={onNewStartGame}/>
    </View>
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    image:{
        height:300,
        width:"80%",
    }
})

export default GameOver;