import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

export default function App() {
    const [result, setResult] = useState(0);

    let name: string = 'Harun';
    const greetingFunction = () => {
        let message: string = 'Hello ' + name;
        console.log(message);
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
    const fullName = (ime: string, prezime: string) => {
        console.log(ime + ' ' + prezime);
    };
    fullName('Harun', 'Husejnovic');

    const sum = (numberA: number, numberB: number) => {
        return numberA + numberB;
    };

    return (
        <View style={styles.text}>
            <Text onPress={() => setResult(sum(7, 3))}>{result}</Text>
            <Text>Function test</Text>
            <Text>Function test</Text>
            <Text>Function test</Text>
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
