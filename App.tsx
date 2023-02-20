import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

export default function App() {
    // let message: string;
    let message = 'hello';
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
    // type nameType = { [key: string]: number }; // for dynamic inputs
    type Years = { numberOfYears?: number; myYears?: number };
    const years: Years = {};
    years.numberOfYears = 24;
    years.myYears = 12;

    type Car = { name: string; km: number; color?: string };
    const car: Car = {
        name: 'audi',
        km: 115000,
    };
    car.km = 112000;
    car.color = 'blue';

    return (
        <View style={[{ alignItems: 'center', justifyContent: 'center', height: '50%' }]}>
            <Text>let message; message = 'hello'</Text>
            <Text>let message= 'hello' //implicit </Text>
            <Text>let message:string = 'hello' //explicit</Text>
            <Text>let tacnost: boolean = false;</Text>
            <Text>{message}</Text>
            <Text>{numbers}</Text>
            <Text>{names}</Text>
            <Text>{numbers[2]}</Text>
            <Text>{names.length}</Text>
            <Text>{commaSeparator}</Text>
            {/* <Text>{currencyBAM}</Text> */}
            <Text>{commaSeparator2}</Text>
            <StatusBar style="dark" />
        </View>
    );
}
