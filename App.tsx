import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

export default function App() {
    const numbers: number[] = [1, 2, 3, 4]; // [1, 2, 3, 4, 5]
    numbers.push(5); // add element
    // numbers.push('Harun'); string is not assignable to parametar of type number
    //
    const names: string[] = ['Harun', ' ', 'Bajram', ' ', 'Mahir', ' ', 'Malik', ' ', 'Almin'];
    let lenght;
    names.pop(); // remove last element

    // adding some map method, and comma
    const doubleNums: number[] = numbers.map((number) => number * 2);
    const commaSeparator = doubleNums.join(' ,');
    doubleNums;

    const currencyEUR: number[] = [1, 5, 10, 20, 50, 100];
    // const toBAM = (value: number) => {
    //     value *= 1.95;
    //     return value;
    // };
    // let currencyBAM = currencyEUR.map(toBAM);

    const toKM = currencyEUR.map((value) => value * 1.95);

    const commaSeparator2: string = toKM.join(' KM, ');

    return (
        <View style={[{ alignItems: 'center', justifyContent: 'center', height: '50%' }]}>
            <View>
                {currencyEUR.map((item, index) => (
                    <Text key={index}>
                        {index}:{item}
                    </Text>
                ))}
            </View>
            <Text>{numbers}</Text>
            <Text>{names}</Text>
            <Text>{numbers[2]}</Text>
            <Text>{names.length}</Text>
            <Text>{commaSeparator}</Text>
            {/* <Text>{currencyBAM}</Text> */}
            <Text>{commaSeparator2}</Text>

            <StatusBar animated backgroundColor="#c40f" style="dark" />
        </View>
    );
}
