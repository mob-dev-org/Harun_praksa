import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

export default function App() {
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

    interface test1 {
        dna: number;
        myName: string;
        age?: number;
        surName?: string;
        city?: string;
        postCode?: number;
        random?: string;
        testFunction?: () => void;
        fun: string;
    }

    const testObj1: test1 = {
        dna: Math.random(),
        myName: 'Harun',
        fun: '',
    };

    testObj1.surName = 'Husejnovic';
    Object.defineProperty(testObj1, 'age', { get: () => 26 });
    Object.defineProperty(testObj1, 'random', { get: () => Math.random().toString(36).slice(-5) });
    // const random = () => Math.random().toString(36).slice(-5);

    testObj1.fun;

    function makeUser(name: string, age: number) {
        return {
            name: name,
            age: age,
        };
    }

    let user = makeUser('John', 30);

    return (
        <View style={[{ alignItems: 'center', justifyContent: 'center', height: '50%' }]}>
            <Text>{car.name}</Text>
            <Text>{car.km}</Text>
            <Text>{car.color}</Text>
            <Text> {years.myYears}</Text>
            <Text>{testObj1.dna.toFixed(3)}</Text>
            <Text>{testObj1.surName}</Text>
            {/* <Text>{Object.getPrototypeOf(testObj1)}</Text> */}
            <Text>{years.numberOfYears}</Text>
            <Text>{testObj1['age']}</Text>
            <Text>{user['age']}</Text>
            <Text>{user['age']}</Text>
            <Text></Text>
        </View>
    );
}
