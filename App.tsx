import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TextProps, Text, TextInput, View, StyleSheet, Button, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

export default function App() {
    const [result, setResult] = useState<number>(0);
    // const [calculate, setCalculate] = useState<number>(0);

    let name: string = 'Harun';
    const greetingFunction = (): string => {
        let message: string = 'Hello ' + name;
        return message;
    };

    greetingFunction();

    const birthdayFunction = () => {
        let age: number = 26;
        let birthday = +age;
        console.log(birthday);
    };
    // console.log(age); // can't find variable age because it's in the function scope
    birthdayFunction();

    //example with parametars
    const fullName = (name: string, suraName: string) => {
        console.log(name + ' ' + suraName);
    };
    fullName('Harun', 'Husejnovic');
    let numberA: number = 3;
    let numberB: number = 1;

    const sum = (): number => numberA + numberB;

    let numA: number = 6;
    let numB: number = 3;
    const calculate = (): number => {
        return numA * numB;
    };

    const calculateResult: number = calculate();

    return (
        <View style={styles.text}>
            <Text>{greetingFunction()}</Text>
            {/* <Button title="Result" onPress={sum} /> */}
            <Button title="Calculate" onPress={calculate} />
            <Text>{calculateResult}</Text>
            <Text>{sum()}</Text>
            <Text>Function test</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
    },
});
