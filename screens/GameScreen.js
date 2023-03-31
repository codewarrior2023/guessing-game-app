import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native'
import NumberContainer from '../components/NumberContainer';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton'

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen(props) {
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, props.userNumber)

    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        if (currentGuess === props.userNumber) {
            props.onGameOver();
        }
    }, [currentGuess, props.userNumber, props.onGameOver])

    function nextGuessHandler(direction) {
        if(direction === 'lower' && currentGuess < props.userNumber || direction === 'higher' && currentGuess > props.userNumber) {
            Alert.alert('Dont lie!', 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel'}]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber);
    }

    return (
        <View style={styles.screen}>
            <Title> Opponent's Guess </Title>
            <NumberContainer> {currentGuess} </NumberContainer>
            <View>
                <Text> Higher or lower? </Text>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower' )}> - </PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher' )}> + </PrimaryButton>
            </View>
            <View>

            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
});