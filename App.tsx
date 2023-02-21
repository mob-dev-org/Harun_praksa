import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TextProps, Text, TextInput, View, StyleSheet, Button, Alert, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

export default function App() {
    const [start, setStart] = useState(0);
    // const [firstName, setFirstName] = useState<string>('');
    // const [lastName, setLastName] = useState<string>('');

    // const fullName = firstName + ' ' + lastName;

    const decrementCount = () => {
        setStart(start - 1);
    };

    // const incrementCount = () => {
    //     setStart(start + 1);
    // };

    return (
        <View style={styles.text}>
            <Pressable onPress={() => setStart(start + 1)}>
                <Text style={styles.pressButton}> + </Text>
            </Pressable>

            <Text style={styles.textCount}>{start}</Text>

            <Pressable onPress={decrementCount}>
                <Text style={styles.pressButton}> - </Text>
            </Pressable>

            <StatusBar style="dark" />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
    },

    pressButton: {
        fontSize: 25,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    textCount: {
        fontSize: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
