import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [feedback, setFeedback] = useState('Guess a number between 1-100');
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100) + 1);
  const [userGuess, setUserGuess] = useState('');
  const [guessCounter, setGuessCounter] = useState(0);

const checkNumber = () => {
  const guessInt = parseInt(userGuess);
  setGuessCounter(guessCounter + 1)

  if (guessInt > randomNum) {
    setFeedback(`Your guess ${guessInt} was too high`);    
  } else if (guessInt < randomNum) {
    setFeedback(`Your guess ${guessInt} was too low`);
  } else {
    Alert.alert("Congratulations!", `You guessed right in ${guessCounter} guesses`, [
      { text: "Reset game", onPress: () => resetGame() }
    ]);
  }
};

const resetGame = () => {
    setRandomNum(Math.floor(Math.random() * 100) + 1);
    setUserGuess('');
    setGuessCounter(0);
    setFeedback('Guess a number between 1-100');
}

  return (
    <View style={styles.container}>
      <Text>{feedback}</Text>
      <TextInput
      style={styles.input}
      keyboardType='numeric'
      value={userGuess}
      onChangeText={(text) => {
        let newText = text.replace(/[^0-9]/g, '');
        setUserGuess(newText);
      }}
      />
      <Button title='Make guess' onPress={checkNumber} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 80,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
