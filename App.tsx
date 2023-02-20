import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
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

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <View style={[{ alignItems: 'center', justifyContent: 'center', height: '50%' }]}>
                <Text>{car.name}</Text>
                <Text>{car.km}</Text>
                <Text>{car.color}</Text>
                <Text> {years.myYears}</Text>
                <Text>{years.numberOfYears}</Text>
            </View>
        );
    }
}
