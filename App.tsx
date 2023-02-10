import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
    // let name: string = 'Harun';
    // function greetingFunction() {
    //     let message: string = 'Hello ' + name;
    //     alert(message);
    // }
    // alert(name);
    // greetingFunction();

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
    console.log(sum(4, 2));

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <View style={styles.text}>
                <Text>Function</Text>
                <Text>Function test</Text>
                <Text>Function test</Text>
                <Text>Function test</Text>
                <Text>Function test</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
    },
});
