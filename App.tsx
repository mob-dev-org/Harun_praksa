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
    // function nameOfFunction() {
    //     let message: string = 'Hello ' + name;
    //     alert(message);
    // }
    // alert(name);
    // nameOfFunction();

    let name: string = 'Harun';
    const nameOfFunction = () => {
        let message: string = 'Hello ' + name;
        console.log(message);
    };

    nameOfFunction();

    const functionName = () => {
        let age = 26;
        let birthday = 1 + age;
        console.log(birthday);
    };
    // console.log(age); // can't find variable age because it's in the function scope
    functionName();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <View style={styles.text}>
                <Text>Function test</Text>
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
